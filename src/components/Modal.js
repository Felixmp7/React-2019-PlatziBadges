import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

const Modal = props => {
  if (!props.isOpen) {
    return null
  }
  return (
        ReactDOM.createPortal(
          <div className="Modal">
            <div className="Modal__container">
              <button onClick={props.onClose} className="Modal__close-button">
                X
              </button>

              {props.children}
              {/* usando los childrens acá puedo hacer una especie de Modal generico */}
            </div>
          </div>,
          document.getElementById('modal')
        )
  );
}

export default Modal
