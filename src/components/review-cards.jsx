import React, { useContext, useState } from 'react'
import ProgressBar from './progress-bar';
import Context from '../context/context.js';

const ReviewCards = () => {
  const { state, setActiveCard } = useContext(Context);
  const activeCard = state.activeCard;

  const [ flipped, flipCard ] = useState(false);
  const [ color, changeColor ] = useState('bg-dark');
  const [ progress, setProgress ] = useState(0);

  const nextCard = (e) => {
    e.stopPropagation();
    if (activeCard === state.cards.length - 1) {
      setActiveCard(0);
      flipCard(false);
      changeColor('bg-dark');
      updateProgress(0);
      return;
    }
    setActiveCard(activeCard + 1);
    flipCard(false);
    changeColor('bg-dark');
    updateProgress(activeCard + 1);
  }

  const previousCard = (e) => {
    e.stopPropagation();
    if (activeCard === 0) {
      setActiveCard(state.cards.length - 1)
      flipCard(false);
      changeColor('bg-dark');
      updateProgress(state.cards.length - 1);
      return;
    }
    setActiveCard(activeCard - 1);
    flipCard(false);
    changeColor('bg-dark');
    updateProgress(activeCard - 1);
  }

  const handleCardFlip = () => {
    flipCard(prevState => !prevState);
    if (color === 'bg-dark') {
      changeColor('bg-secondary');
    } else if (color === 'bg-secondary') {
      changeColor('bg-dark');
    }
    updateProgress(activeCard + 1);
  }

  const updateProgress = (progress) => {
    setProgress(((progress) / state.cards.length) * 100);
  }

  return (
    <>
      <h2 className="text-center font-weight-bold mb-3">Review</h2>
      { state.cards.length === 0 ?
        <h2 className="text-center font-weight-bold">Create flash cards first!</h2>
      : <>
          <ProgressBar complete={progress} />
          <div onClick={handleCardFlip} className={'container cursor-pointer ' + color} >
            <div className="row justify-content-center align-items-center card-review">
              <div className="col-md-1">
                <i onClick={(e) => previousCard(e)} className="fas fa-chevron-left arrow hover"></i>
              </div>
              <div className="col-md-10">
                <h2 className="text-center font-weight-bold text-white">
                  { !flipped ?
                    state.cards[activeCard].question
                  : state.cards[activeCard].answer
                  }
                </h2>
              </div>
              <div className="col-md-1">
                <i onClick={(e) => nextCard(e)} className="fas fa-chevron-right arrow hover"></i>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default ReviewCards;
