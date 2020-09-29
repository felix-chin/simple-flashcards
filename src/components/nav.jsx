import React from 'react'

export default function Nav(props) {
  const setView = props.setView;
  const view = props.view;
  const setActiveCard = props.setActiveCard;
  let viewClass;
  let reviewClass;
  let createClass;

  if (view === 'view-cards') {
    viewClass = 'active';
    reviewClass = '';
    createClass = '';
  } else if (view === 'review-cards') {
    viewClass = '';
    reviewClass = 'active';
    createClass = '';
  } else if (view === 'create-card') {
    viewClass = '';
    reviewClass = '';
    createClass = 'active';
  }

  const handleReviewClick = () => {
    setActiveCard(0);
    setView('review-cards');
  }

  return (
    <nav className="navbar d-flex justify-content-end mb-4">
      <div className="navbar-brand">
        <h4 onClick={() => setView('create-card')} className="font-weight-bold">Simple Flashcards</h4>
      </div>
      <div className="ml-auto">
        <span role="button" onClick={() => setView('view-cards')} className={'btn btn-outline-primary border-0 ' + viewClass}>View Cards</span>
        <span role="button" onClick={handleReviewClick} className={'btn btn-outline-primary border-0 ml-1 ' + reviewClass}>Review</span>
        <span role="button" onClick={() => setView('create-card')} className={'btn btn-outline-primary border-0 ml-1 ' + createClass}>Create Card</span>
      </div>
    </nav>
  )
}
