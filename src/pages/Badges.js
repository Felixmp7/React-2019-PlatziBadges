import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core';
import { MoonLoader } from 'react-spinners';
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import API from '../API'
import './styles/Badges.css'

const override = css`
    display: block;
    margin: auto;
    border-color: #7DCD3F;
`;

class Badges extends Component {
  state = {
    data: undefined,
    loading: true,
    error: null
  }

  componentDidMount(){
    this.fetchData()
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
    if (this.state.loading) {
      return (
        <div className="Loader__container">
          <div className="Loader">
            <MoonLoader
                      css={override}
                      sizeUnit={"px"}
                      size={80}
                      color={'#1B1B25'}
                      loading={this.state.loading}
                    />
          </div>
        </div>
      )
    }

    if (this.state.error) {
      return <h3>{`Error ${this.state.error.message}`}</h3>
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
