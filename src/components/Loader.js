import React from 'react'
import { BeatLoader } from 'react-spinners';
import './styles/Loader.css'

const Loader = props => {
  return (
    <div className="Loader__container">
      <div className="Loader">
        <BeatLoader
                  sizeUnit={"px"}
                  size={props.size}
                  color={props.color}
                  loading={this.state.loading}
                />
      </div>
    </div>
  );
}

export default Loader
