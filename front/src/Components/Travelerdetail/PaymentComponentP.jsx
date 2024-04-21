import React from 'react'
import './PaymentComponent.css'

const PaymentComponentP = () => {
  const handleProceedToPayment = () => {
    // In a real-world scenario, you would integrate with a payment gateway here
    // For the sake of this example, we'll simply log a message
    console.log('Proceeding to payment...');
  };

  return (
    <div className="payment-container">
      <h1>Proceed to Payment</h1>
      <div className="qr-code">
        {/* In a real-world scenario, you would generate a QR code for the UPI payment */}
        {/* For this example, we'll use a placeholder QR code image */}
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-73dea30d1ea0335b12059467652e8e26-lq" // Placeholder image URL, replace it with the actual QR code
          alt="QR Code"
        />
      </div>
      <p>Scan the QR code or use the provided UPI ID to proceed with the payment.</p>
      <div className="upi-id">
        UPI ID: <strong>yaatrii@upi</strong>
      </div>
      <button className='Payment-button' onClick={handleProceedToPayment}>Payment Now</button>
    </div>
  )
}

export default PaymentComponentP
