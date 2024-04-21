import React from 'react'

const Map = () => {
  return (
    <div>
  <h1>Location for your destination</h1>
  <p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4278421816634!2d79.06693514999999!3d30.734481499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083ee051e628b1%3A0x167ce4efaf440f1e!2sKedarnath%2C%20Uttarakhand%20246445!5e0!3m2!1sen!2sin!4v1712646440386!5m2!1sen!2sin"
      width="800"
      height="600"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </p>
</div>
  )
}

export default Map

