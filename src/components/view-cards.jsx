import React, { useContext } from 'react';
import CardsContext from '../context/context.js';

export default function ViewCards(props) {
  const cards = useContext(CardsContext);
  return (
    <>
      <h2 className="text-center font-weight-bold mb-4">My Cards</h2>
      <div className="container">
        <div className="row row-cols-md-3">
          { cards.map((card, i) => {
            return (
              <div key={i} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body bg-dark">
                    <h6 className="card-title text-muted font-weight-bold">Question:</h6>
                    <p className="card-text text-white">{card.question}</p>
                  </div>
                  <div className="card-body bg-secondary">
                    <h6 className="card-title text-dark font-weight-bold">Answer:</h6>
                    <p className="card-text text-white">{card.answer}</p>
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
