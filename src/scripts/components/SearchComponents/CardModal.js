import React from 'react'
import Modal from 'react-modal'

const CardModal = (props) => {
  if (!props.selectedCard) {
    return <div></div>
  }
  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="card-modal">
        <img src={ props.selectedCard.images.original.url } />
        <p><strong>Source:</strong> <a href={ props.selectedCard.source }>{props.selectedCard.source }</a></p>
        <p><strong>Rating:</strong> { props.selectedCard.rating }</p>
        
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  )
}

export default CardModal
