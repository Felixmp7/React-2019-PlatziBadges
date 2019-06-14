import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

class Badges extends Component {
  render () {
    return (
      <div>
        <Navbar/>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conf Logo" className="Badges_conf"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Badges
