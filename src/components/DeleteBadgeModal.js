import React from 'react'
import Modal from './Modal'

const DeleteBadgeModal = props => {
  return (
    <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>Delete Modal</Modal>
  );
}

export default DeleteBadgeModal
