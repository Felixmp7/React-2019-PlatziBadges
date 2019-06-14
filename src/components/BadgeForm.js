import React, {Component} from 'react'

class BadgeForm extends Component {
  state = {}
  handleChange = e => {
    this.setState({
      // firstName: e.target.value, Para crear keys dinamicos puedo usar []
      [e.target.name]: e.target.value
    })
  }
  handleClick = e => {
    console.log('Button was clicked')
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('Form was submited')
  }
  render () {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button
            onClick={this.handleClick}
            className="btn btn-primary"
            >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
