import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'

class BadgeNew extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="BadgeNew__hero"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                twitter="sparragus"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
