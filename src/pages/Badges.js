import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import BadgesList from '../components/BadgesList'
import PagError from '../components/PagError'
import confLogo from '../images/badge-header.svg'
import API from '../API'
import './styles/Badges.css'

class Badges extends Component {
  state = {
    data: undefined,
    loading: true,
    error: null
  }

  componentDidMount(){
    this.fetchData()

    // this.intervalID = setInterval(this.fetchData, 4000)
  }

  componentWillUnmount(){
    // clearInterval(this.intervalID)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try{
      const data = await API.badges.list()
      this.setState({ loading: false, data})
    }
    catch(e){
      this.setState({ loading: false, error: e})
    }
  }

  render () {
    if (this.state.loading && !this.state.data) {
      return <Loader size={40} color={'blue'} />
    }

    if (this.state.error) {
      return <PagError error={this.state.error}/>
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
            {
              this.state.loading && <Loader size={20} color={'black'} />
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges
