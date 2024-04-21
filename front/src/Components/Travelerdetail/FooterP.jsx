import React from 'react'
import './Footer.css'
import mainLogo from '../Travelerdetail/laksh.jpg'

const FooterP = () => {
  return (
    <footer className="footer-containerp">
      <div className="footer-contentp">
        <div className="footer-logo">
          <img src={mainLogo} alt="Travel Company Logo" />
          <h1>Travel Explorer</h1>
        </div>

        <div className="footer-linksp">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contactp">
          <h2>Contact Us</h2>
          <p>Email: yaatrii@.com</p>
          <p>Phone: +91 555 000 9999</p>
        </div>
      </div>

      <div className="footer-bottomp">
        <p>&copy; 2024 Travel Explorer. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterP
