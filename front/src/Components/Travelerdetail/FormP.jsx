import React, { useState } from 'react'

const FormP = () => {
  const [showForm, setShowForm] = useState(false);
  const [travelers, setTravelers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: ''
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraveler = { ...formData };
    setTravelers([...travelers, newTraveler]);
    setFormData({
      name: '',
      gender: '',
      age: ''
    });
    toggleForm();
  };

  return (
    <div className="traveler-containerp">
      <button onClick={toggleForm}>Add Traveler</button>
      {showForm && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
      <div className="traveler-detailsp">
        <h2>Traveler Details</h2>
        <ul>
          {travelers.map((traveler, index) => (
            <li key={index}>
              Name: {traveler.name}, Gender: {traveler.gender}, Age: {traveler.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FormP
