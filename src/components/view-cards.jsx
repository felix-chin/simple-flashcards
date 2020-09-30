import React, { useContext, useState } from 'react';
import Context from '../context/context.js';
import Modal from './modal';

export default function ViewCards(props) {
  const { state, setActiveCard, setView } = useContext(Context);
  const cards = state.cards;
  const activeCard = state.activeCard;

  const [ isOpen, toggleModal ] = useState(false);

  const handleModal = (i) => {
    setActiveCard(i);
    toggleModal(true);
  }

  const handleUpdate = (i) => {
    setActiveCard(i);
    setView('update-cards');
  }

  return (
    <>
      { isOpen &&
        <Modal activeCard={cards[activeCard]} toggleModal={toggleModal} deleteCards={props.deleteCards}/>
      }
      <h2 className="text-center font-weight-bold mb-3"><i className="far fa-eye icon"></i> My Cards</h2>
      <div className="container">
        <div className="row row-cols-md-3 row-cols-1">
          { cards.map((card, i) => {
            return (
              <div key={i} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body bg-dark">
                    <h5 className="card-title text-muted font-weight-bold">Question:</h5>
                    <p className="card-text text-white">{card.question}</p>
                  </div>
                  <div className="card-body bg-secondary">
                    <h5 className="card-title text-dark font-weight-bold">Answer:</h5>
                    <p className="card-text text-white">{card.answer}</p>
                  </div>
                  <div className="card-footer text-center bg-dark">
                    <i onClick={() => handleUpdate(i)} className="far fa-edit text-muted mr-2 hover"></i>
                    <i onClick={() => handleModal(i)} className="far fa-trash-alt text-muted hover"></i>
                  </div>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </>
  )
}
