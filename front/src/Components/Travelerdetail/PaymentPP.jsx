import React from 'react'
import './Payment.css'
const PaymentPP = () => {
  return (
    <div className="card-instruction">
      <div className="header">
        <h2>GRAND TOTAL - 2 Adults</h2>
        <p>42% OFF</p>
        <p>₹92,392 (Inclusive of GST)</p>
      </div>

      

      <div className="fare-breakup">
        <h3>Fare Breakup</h3>
        <p>Total Basic Cost: ₹1,49,584 <br />(74,792 x 2 Travellers)</p>
        <hr />
        <p>Coupon Discount: - ₹61,593 <br /> (GOHOLIDAY)</p>
        <hr />
        <p>Fees & Taxes: + ₹4,400 <br />(GST 5.0%) ₹1,400</p>
      </div>

      <div className="important-info">
        <h3>Importent Information</h3>
        <p>
          By clicking on the Continue button below to proceed with the booking, I confirm that I have read and I accept
          Cancellation Policy, User Agreement, Terms of Service, and Privacy Policy of MakeMyTrip
        </p>
      </div>

      <div className="proceed-to-payments">
        <button>PROCEED TO PAYMENTS</button>
        <p>Complete Booking in  <span>13:23 mins</span></p>
      </div>

      <div className="coupons-offers">
        <h3>Coupons & Offers</h3>
        <p>Have a Coupon Code?</p>
        <input type="text" placeholder="Have a Coupon Code ?"  />
        <button>Apply</button>
        <hr />
        <hr />
        <div className="coupon-details">
          <p>GOHOLIDAY</p>
          <p>Hurry Don't miss on the Extra Discount Valid only for 2 Days..!!!</p>
          <button>REMOVE - ₹61,593</button>
        </div>

        <div className="coupon-details">
          <p>SPECIALDEAL</p>
          <p>Up to 30% off call out</p>
          <button>APPLY - ₹59,473</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPP
