import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

class Badges extends Component {
  state = {
    data: undefined,
    loading: true,
    error: null
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ loading: true, error: null})

    try{
      const data = []
      this.setState({ loading: false, data})
    }
    catch(e){
      this.setState({ loading: false, error})
    }
  }

  render () {
    if (this.state.loading) {
      return <h3>Loading ...</h3>
    }
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conf Logo" className="Badges_conf"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badge__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges
