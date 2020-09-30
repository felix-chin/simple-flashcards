import React, { useState } from 'react';

const FrontCard = (props) => {

  return (
    <div className="container cursor-pointer bg-dark" >
      <div onClick={props.handleCardFlip} className="row justify-content-center align-items-center card-review">
        <div className="col-md-1 col-2 text-center arrow-hover">
          <i onClick={props.previousCard} className="fas fa-chevron-left arrow"></i>
        </div>
        <div className="col-md-10 col-8">
          <h2 className="text-center font-weight-bold text-white review-text">
            {props.question}
          </h2>
        </div>
        <div className="col-md-1 col-2 text-center arrow-hover">
          <i onClick={props.nextCard} className="fas fa-chevron-right arrow"></i>
        </div>
      </div>
    </div>
  )
}

export default FrontCard;
