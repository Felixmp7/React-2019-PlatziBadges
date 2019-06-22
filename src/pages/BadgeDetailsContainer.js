import React, {Component} from 'react'
import BadgeDetails from './BadgeDetails'
import Loader from '../components/Loader'
import PagError from '../components/PagError'
import API from '../API'


class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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

  handleOpenModal = e => {
    this.setState({
      modalIsOpen: true
    })
  }
  handleCloseModal = e => {
    this.setState({
      modalIsOpen: false
    })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null})
    try {
      await API.badges.remove(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error})
    }
  }

  render () {
    if (this.state.loading) { return <Loader size={30} color={'#1B1B25'}/> }
    if (this.state.error) { return <PagError error={this.state.error.message}/> }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    )
  }
}

export default BadgeDetailsContainer
