import React from 'react'

export default class CreateCard extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center">Create New Card</h1>
        <form>
          <label>Question</label>
          <textarea></textarea>
          <label>Answer</label>
          <textarea></textarea>
        </form>
      </>
    )
  }
}
