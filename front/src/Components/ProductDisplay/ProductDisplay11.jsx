import React from 'react'
import imgP from '../Assets/pg1.jpg'; // assuming you have the background image file
import imgS from '../Assets/product_2.jpg'; // assuming you have the background image file
import imgR from '../Assets/product_3.jpg'; // assuming you have the background image file
import './ProductDisplay.css'; // assuming you have a CSS file for styling
import DurationSelector from './DurationSelector';
import TransportSelector from './TransportSelector';

const ProductDisplay11 = () => {
    return (
        <div className="tour-package-details">
          {/* Section 1: Background Image with Card Image Slide */}
          <div className='ProductDiv'>
      <div className="product-images">
        <div className="background-imageP">
          <img src={imgP} alt='' />
        </div>
        <div className='background-imageS'>
          <img src={imgS} alt='' />
          <img src={imgS} alt='' />
          <img src={imgR} alt='' />
        </div>
      </div>
      <div className="product-detailS">
        <p>Package Rating: ⭐⭐ ⭐ ⭐</p>
        <button>Give Review</button>
      </div>
    </div>
    
    
          {/* Section 2: Package Details */}
          <div className="package-details">
            <h2>Package Details</h2>
            <p><strong>Destination:</strong> Bhopal</p>
            <p><strong>Description:</strong>Seek blessings at the Jagannath Temple and relax on the sandy beaches.</p>
            <DurationSelector/>
            <TransportSelector/>
            <button className="book-now-button">Book Now</button>
          </div>
    
          {/* Section 3: Tour Description */}
          <div className="tour-description">
            <h2>Tour Description</h2>
            <p>This tour package offers a comprehensive exploration of Bhopal, starting from day 1 and continuing until day 3, the last day of the tour. Here's a brief itinerary:</p>
            <ul>
              <li><strong>Day 1:</strong> Arrival in Bhopal, check-in to the hotel, visit Bhimbetka rock shelters.</li>
              <li><strong>Day 2:</strong> Explore the Upper Lake, visit other local attractions.</li>
              <li><strong>Day 3:</strong> Departure from Bhopal.</li>
            </ul>
            <p>Discover the rich cultural heritage, breathtaking natural landscapes, and delicious local cuisine of Bhopal during this unforgettable journey.</p>
          </div>
        </div>
    
  )
}

export default ProductDisplay11
