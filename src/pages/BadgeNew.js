import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends Component {
  state = {
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
  render () {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="BadgeNew__hero"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
