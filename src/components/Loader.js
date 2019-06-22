import React from 'react'
import { BeatLoader } from 'react-spinners';
import './styles/Loader.css'

export default class Loader extends React.Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div className="Loader__container">
        <div className="Loader">
          <BeatLoader
                    sizeUnit={"px"}
                    size={this.props.size}
                    color={this.props.color}
                    loading={this.state.loading}
                  />
        </div>
      </div>
    );
  }
}
