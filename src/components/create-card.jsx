import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault();
    const addCards = this.props.addCards;
    addCards(this.state)
    this.handleReset();
  }

  handleReset() {
    const setView =  this.props.setView;
    this.setState({
      question: '',
      answer: ''
    })
    setView('view-cards');
  }

  render() {
    return (
      <>
        <h2 className="text-center font-weight-bold mb-3">Create New Card</h2>
        <div className="container">
          <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="w-50 mx-auto">
            <div className="d-flex flex-column">
              <label htmlFor="question">
                Question:
            </label>
              <textarea name="question" value={this.state.question} onChange={this.handleChange} />
              <label htmlFor="answer" className="mt-3">
                Answer:
            </label>
              <textarea name="answer" value={this.state.answer} onChange={this.handleChange} />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button type="reset" className="btn btn-outline-danger mr-2">Cancel</button>
              <button type="submit" className="btn btn-outline-primary">Save Card</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}
