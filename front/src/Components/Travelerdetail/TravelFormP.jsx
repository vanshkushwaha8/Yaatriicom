import React, { useState } from 'react'
import './Travlerfrom.css'
import'./pop.css'

const TravelFormP = () => {
  const [adult1, setAdult1] = useState('');
  const [adult2, setAdult2] = useState('');
  const [email, setEmail] = useState('');
  const [mobileCode, setMobileCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [gstState, setGstState] = useState('');
  const [address, setAddress] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // For demonstration purposes, log the form data
    console.log({
      adult1,
      adult2,
      email,
      mobileCode,
      mobile,
      city,
      gstState,
      address,
      specialRequests,
    });
  };

  return (
    
    <div>
      <h1>Amazing Ladakh - Group Tour (Deluxe)</h1>
      <p className='tour-parap'>Group Package 2​​​N Leh ​​​1​​​N Nubra Valley ​​​1​​​N Pangong ​​​1​​​N Leh ​​​</p>
      
      <form onSubmit={handleFormSubmit}>
        <div>
        <h2>Traveller 1</h2>


<>
        <button type="buttonp" onClick={toggleModal} className="btn-modal">

        Add Traveller
      </button>
      <label>
            Adult :
            <input type="text" value={adult1} onChange={(e) => setAdult1(e.target.value)} />
          </label>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
            <form  onSubmit={handleSubmit}>
              <h2>Add Traveler Details</h2>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />

              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />

              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" required />

              <label htmlFor="passportNumber">Enter age:</label>
              <input
                type="age"
                
                required
              />

              <button type="submit">Submit</button>
            </form>

            <button className="buttonp" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
      
      </>
        </div>

        <div>
          <h2>Traveller 2</h2>
          
          <button type="button" onClick={toggleModal} className="btn-modal">Add Traveller</button>
          <label>
            Adult :
            <input type="text" value={adult2} onChange={(e) => setAdult2(e.target.value)} />
          </label>
        </div>

        <div>
          <h2>Contact Details</h2>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Mobile Code:
            <input type="text" value={mobileCode} onChange={(e) => setMobileCode(e.target.value)} />
          </label>
          <label>
            Mobile:
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </label>
        </div>

        <div>
          <h2>GST Details</h2>
          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
          <br />
          <label>
            GST State:
            <input type="text" value={gstState} onChange={(e) => setGstState(e.target.value)} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
        </div>

        <div>
          <h2>Special Requests</h2>
          <label>
            Enter Special Requests:
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            ></textarea>
          </label>
        </div>
        <a href='payment.jsx'><button  type="submit">Submit</button>
        </a>
      </form>
    </div>
  )
}

export default TravelFormP
