import React from 'react'

export default class CreateCard extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center">Create New Card</h1>
        <form className="w-50 mx-auto">
          <div className="d-flex flex-column">
            <label htmlFor="question">
              Question:
            </label>
            <textarea name="question" />
            <label htmlFor="answer" className="mt-3">
              Answer:
            </label>
            <textarea name="answer" />
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
