import React, { useContext } from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import { CardsProvider } from '../context/context.js';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'create-card',
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.addCards = this.addCards.bind(this);
  }

  setView(newView) {
    this.setState({ view: newView })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCards={this.addCards} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    const cards = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', cards)
  }

  addCards(card) {
    const cards = this.state.cards;
    const newCards = cards.concat(card);
    this.setState({ cards: newCards }, this.saveCards);
  }

  render() {
    console.log('Cards From App:', this.state.cards);
    return (
      <div className="container">
        <Nav setView={this.setView} view={this.state.view}/>
        <CardsProvider value={this.state.cards}>
          {this.getView()}
        </CardsProvider>
      </div>
    );
  }
}
