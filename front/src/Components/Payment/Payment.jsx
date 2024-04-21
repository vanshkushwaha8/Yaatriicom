import React from 'react'
import FooterP from '../Travelerdetail/FooterP'
import FormP from '../Travelerdetail/FormP'
import PaymentSuccessComponentP from '../Travelerdetail/PaymentSuccessComponentP'
import PaymentComponentP from '../Travelerdetail/PaymentComponentP'
import TravelFormP from '../Travelerdetail/TravelFormP'
import PaymentPP from '../Travelerdetail/PaymentPP'
import TravelerP from '../Travelerdetail/TravelerP'
import Modals from '../Travelerdetail/pop'

const Payment = () => {
  return (
    <div>
    <TravelFormP />
    <PaymentPP/>
    <TravelerP/>
    <PaymentComponentP/>
    <PaymentSuccessComponentP/>
    <Modals />
    <FormP/>
    <FooterP/>

    </div>
  )
}

export default Payment
