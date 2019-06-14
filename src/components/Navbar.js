import React, {Component} from 'react'
import logo from '../images/logo.svg'

class Navbar extends Component {
  render () {
    return (
      <div>
        <a href="">
          <img src={logo} alt="logoConf"/>
          <span>Platzi</span>
          <span>Conf</span>
        </a>
      </div>
    )
  }
}

export default Navbar
