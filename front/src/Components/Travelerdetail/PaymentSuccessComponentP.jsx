import React from 'react'
import './PaymentSuccessComponent.css'

const PaymentSuccessComponentP = ({ name, changesDetails, tourDetails }) => {
  return (
    <div className="payment-success-container">
      <div className="success-message">
        <h2>Payment Successful</h2>
        <p>Your payment has been successfully processed, {name}!</p>
      </div>

      <div className="details-container">
        <div className="changes-details">
          <h3>Details of Changes</h3>
          <p>{changesDetails}</p>
        </div>

        <div className="tour-details">
          <h3>Tour Details</h3>
          <p>{tourDetails}</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccessComponentP
