import React from 'react'

export const Modal = (props) => {
  const { item, closeModal } = props
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>{item.brand}</h1>
        <p className="modal_content p">{item.brand}</p>
        <p className="modal_content p">{item.work_volume}</p>
        <p className="modal_content p">{item.L}</p>
        <p className="modal_content p">{item.W}</p>
        <p className="modal_content p">{item.weight}</p>
        <p className="modal_content p">{item.tractor_power}</p>
        <p className="modal_content p">{item.price}</p>
        <button className="btn btn-default" onClick={closeModal}>Закрити вікно</button>
      </div>
    </div>
  )
}
