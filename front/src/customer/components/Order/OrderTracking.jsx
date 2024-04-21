import React from 'react'
import {Stepper, Step, StepLabel} from '@mui/material'


const steps=[
    "Longin",
    "Booking confirmed",
    "Trip start",
    "Trip End"
]
const OrderTracking = ({activeStep}) => {
  return (
    <div className='w-[full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                    <StepLabel sx={{color: "#9155FD", fontSize:"44px"}}>{label}</StepLabel>
                </Step>)}
        </Stepper>
      
    </div>
  )
}

export default OrderTracking
