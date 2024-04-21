// Logout.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Logout.css'; // Import CSS for styling

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here
    // Redirect user to login page after logout
    history.push('/login');
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
