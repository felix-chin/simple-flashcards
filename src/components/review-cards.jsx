import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/context.js';

const ReviewCards = () => {
  const { state, setActiveCard } = useContext(Context);
  const activeCard = state.activeCard;

  const [ answerRevealed, flipCard ] = useState(false);

  useEffect(() => {
    setActiveCard(0);
  }, [])

  const nextCard = (e) => {
    e.stopPropagation();
    if (activeCard === state.cards.length - 1) {
      setActiveCard(0);
      flipCard(false);
      return;
    }
    setActiveCard(activeCard + 1);
  }

  const previousCard = (e) => {
    e.stopPropagation();
    if (activeCard === 0) {
      setActiveCard(state.cards.length - 1)
      flipCard(false);
      return;
    }
    setActiveCard(activeCard - 1);
  }

  let displayCardText;
  if (!answerRevealed && state.cards.length > 0) {
    displayCardText = state.cards[activeCard].question;
  } else if (answerRevealed && state.cards.length > 0) {
    displayCardText = state.cards[activeCard].answer;
  }

  return (
    <>
      <h2 className="text-center font-weight-bold mb-4">Review</h2>
      { state.cards.length === 0 ?
        <h2 className="text-center font-weight-bold">Create flash cards first!</h2>
        :
        <div
          onClick={() => flipCard(prevState => !prevState)}
          className="container h-100">
          <div className="row">
            <div className="col-md-1">
              <i onClick={(e) => previousCard(e)} className="fas fa-chevron-left h1"></i>
            </div>
            <div className="col-md-10">
              <h2 className="text-center font-weight-bold">
                { displayCardText }
              </h2>
            </div>
            <div className="col-md-1">
              <i onClick={(e) => nextCard(e)} className="fas fa-chevron-right h1"></i>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ReviewCards;
