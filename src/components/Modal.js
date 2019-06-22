import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  return (
        ReactDOM.createPortal(
          <h1>Modal</h1>,
          document.getElementById('modal')
        )
  );
}

export default Modal