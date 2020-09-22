import React from 'react'

export default function Nav(props) {
  const setView = props.setView;
  const view = props.view;
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

  return (
    <nav className="nav navbar d-flex justify-content-end mt-1 mr-1">
      <span role="button" onClick={() => setView('view-cards')} className={'btn btn-outline-primary border-0 ' + viewClass}>View Cards</span>
      <span role="button" onClick={() => setView('review-cards')} className={'btn btn-outline-primary border-0 ml-1 ' + reviewClass}>Review</span>
      <span role="button" onClick={() => setView('create-card')} className={'btn btn-outline-primary border-0 ml-1 ' + createClass}>Create Card</span>
    </nav>
  )
}
