import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    const addCards = props.addCards;
    addCards(this.state)
  }

  handleReset() {
    this.setState({
      question: '',
      answer: ''
    })

  }

  render() {
    return (
      <>
        <h1 className="text-center">Create New Card</h1>
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
      </>
    )
  }
}
