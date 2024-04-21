import React from 'react'
import './FeedbackD.css'
const FeedbackPage = () => {
  return (
    <div className="feedbackD-container">
      <h2>Feedback</h2>
      <form className="feedbackD-form">
        <div className="form-group">
          <label htmlFor="feedbackInput">Your Feedback:</label>
          <textarea id="feedbackInput" className="form-control" rows="5" placeholder="Enter your feedback"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="ratingInput">Rating:</label>
          <select id="ratingInput" className="form-control">
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  )
}

export default FeedbackPage
