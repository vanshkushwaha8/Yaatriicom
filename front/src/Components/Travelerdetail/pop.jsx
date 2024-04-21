import React, { useState } from "react";
import "./pop.css";

export default function Modals() {
  const [modals, setModals] = useState(false);

  const toggleModals = () => {
    setModals(!modals);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if(modals) {
    document.body.classList.add('active-modals')
  } else {
    document.body.classList.remove('active-modals')
  }

  return (
    <>
      

      {modals && (
        <div className="modals">
          <div onClick={toggleModals} className="overlay"></div>
          <div className="modals-content">
            <h2>Add Traveler Details</h2>
            <form onSubmit={handleSubmit}>
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

              <label htmlFor="passportNumber">Passport Number:</label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                required
              />

              <button type="submit">Submit</button>
            </form>
            <button className="close-modals" onClick={toggleModals}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}