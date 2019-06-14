import React, {Component} from 'react'

class BadgeForm extends Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }
  handleClick = e => {
    e.preventDefault() // Puedo solucionar el evento submit con el preventDefault
    // o añadiendole un type="button" al boton
    console.log('Button has clicked')
  }
  render () {
    return (
      <div>
        <h1>New Attendant</h1>

        <form action="">
          <div className="form-group">
            <label>FirstName</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="firstName"
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
