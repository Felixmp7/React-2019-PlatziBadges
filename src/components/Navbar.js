import React, {Component} from 'react'
import logo from '../images/logo.svg'
import './styles/Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <div className="Navbar">
        <a href="">
          <img src={logo} alt="logoConf"/>
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    )
  }
}

export default Navbar
