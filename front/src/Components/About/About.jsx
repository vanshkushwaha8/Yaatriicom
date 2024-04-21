import React from 'react'
import './About.css'
import crew1 from '../Assets/crew1.jpg'
import crew2 from '../Assets/crew2.jpg'
import crew3 from '../Assets/crew3.jpg'
import crew4 from '../Assets/crew4.png'
import crew5 from '../Assets/crew5.jpg'
import crew6 from '../Assets/crew6.jpg'
import crew7 from '../Assets/crew7.jpg'
import crew8 from '../Assets/crew8.jpg'
import crew9 from '../Assets/crew9.jpg'

const About = () => {
  return (
    <div className='About-container'>
    <div className="about-page">
    <h1 >Welcome to Yaatrii.com</h1>
    <p>
      Yaatrii.com is your ultimate travel companion, dedicated to providing you with unforgettable experiences around the globe. Whether you're a seasoned explorer or a first-time adventurer, we've got you covered.
    </p>
    <h2>What We Offer</h2>
    <p>
      At Yaatrii.com, we offer a wide range of services to ensure that your travel experience is seamless and enjoyable. Our offerings include:
    </p>
    <ul>
      <li>Curated Tours: Explore handpicked destinations and discover hidden gems with our expertly crafted tours.</li>
      <li>Seamless Booking Experiences: Our user-friendly platform makes booking flights, accommodations, and activities a breeze.</li>
      <li>Personalized Itineraries: Tailor your trip to your preferences with personalized itineraries designed just for you.</li>
      <li>Exclusive Rewards: Unlock special rewards and perks as a member of the Yaatrii community.</li>
    </ul>
    <h2>Join Our Community</h2>
    <p>
      Embark on your journey with thousands of fellow travelers who share your passion for exploration. Connect with like-minded individuals, share travel tips, and make lifelong memories together.
    </p>
    <h2>Contact Us</h2>
    <p>
      Have questions or need assistance? Our dedicated support team is here to help. Feel free to reach out to us via email at support@yaatrii.com or give us a call at 1-800-YAATRII.
    </p>
    <p>
      Thank you for choosing Yaatrii.com as your trusted travel companion. We look forward to helping you create unforgettable memories on your next adventure!
    </p>
    <div className="about-page">
      <h1>Meet the Crew</h1>
      <div className="cardA-container">
        <div className="cardA">
          <img src={crew1} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Akarshan Kumar</h2>
            <p>FRONT-END DEVELOPER </p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew9} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Ajeet Kumar Gupta</h2>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew2} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Rahul kumar Gupta</h2>
            <p>SUPPORT CONSULTANT</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew3} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Ujjwal kuamr roy</h2>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew4} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Prabhat Pandey</h2>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew5} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Aditya Kumar</h2>
            <p>PROJECT MANAGER</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew6} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Vansh Kushwaha</h2>
            <p>Team Lead</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew7} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>K. Aditya</h2>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        <div className="cardA">
          <img src={crew8} alt="FRONT-END DEVELOPER" />
          <div className="details">
            <h2>Saurav kumar</h2>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        
      </div>
      <p>We are hiring! Check out <a href="/careers" className='carrers'>Careers</a></p>
    </div>
  </div></div>
  )
}

export default About
