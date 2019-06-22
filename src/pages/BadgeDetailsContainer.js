import React, {Component} from 'react'
import BadgeDetails from './BadgeDetails'
import Loader from '../components/Loader'
import PagError from '../components/PagError'
import API from '../API'


class BadgeDetailsContainer extends Component {
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
    if (this.state.loading) { return <Loader size={30} color={'#1B1B25'}/> }

    if (this.state.error) { return <PagError error={this.state.error.message}/> }

    return <BadgeDetails badge={this.state.data}/>
  }
}

export default BadgeDetailsContainer
