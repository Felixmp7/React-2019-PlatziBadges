import React, {Component , Fragment} from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import Loader from '../components/Loader'
import API from '../API'
import './styles/BadgeNew.css'

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      // form:{ //De esta forma estoy sobreescribiendo los datos siempre
      //   [e.target.name]: e.target.value
      // }
      form: {
        ...this.state.form, // Con el Spread operator puedo ir guardando todos
        [e.target.name]: e.target.value // los datos sin pisar los anteriores.
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null})

    try {
      await API.badges.create(this.state.form)
      this.setState({ loading: false})

      this.props.history.push('/badges') // Éste metodo de React-Router me permite
      // navegar hasta /badges en el momento que hago submit

    } catch (error) {
      this.setState({ loading: false, error})
    }
  }
  render () {
    if (this.state.loading) {
      return <Loader size={30} color={'#7DCD3F'}/>
    }
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero_image img-fluid" src={header} alt="BadgeNew__hero"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                email={this.state.form.email || "Email"}
                //avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BadgeNew
