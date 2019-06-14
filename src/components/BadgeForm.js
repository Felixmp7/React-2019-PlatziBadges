import React, {Component} from 'react'

class BadgeForm extends Component {
  render () {
    return (
      <div>
        <h1>New Attendant</h1>

        <form action="">
          <div className="form-group">
            <label>FirstName</label>
            <input type="text" className="form-control" name="firstName"/>
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
