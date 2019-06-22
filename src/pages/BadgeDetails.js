import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Badge from '../components/Badge'
import Loader from '../components/Loader'
import PagError from '../components/PagError'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import API from '../API'


class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
    console.log(this.state.data)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await API.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, data })
      console.log(this.state.data);

    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  render () {
    if (this.state.loading) {
      return <Loader size={30} color={'#1B1B25'}/>
    }

    if (this.state.error) {
      return <PagError error={this.state.error.message}/>
    }
    const badge = this.state.data

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                email={badge.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <React.Fragment>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeDetails
