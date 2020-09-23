import React, { useContext } from 'react';
import Context from '../context/context.js';

export default function ViewCards(props) {
  const { state } = useContext(Context);
  const cards = state.cards
  return (
    <>
      <h2 className="text-center font-weight-bold mb-3">My Cards</h2>
      <div className="container">
        <div className="row row-cols-md-3">
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
                    <i className="fas fa-trash-alt fa-inverse text-muted"></i>
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
