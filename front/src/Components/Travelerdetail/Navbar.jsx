import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="navbar-brand">Yaatrii.Com</div>
        <ul className="nav-list">
        <li class="nav-item">Flights</li>
    <li class="nav-item">Hotels</li>
    <li class="nav-item">Trains</li>
    <li class="nav-item">Cabs</li>
    <li class="nav-item">Bus</li>
    <li class="nav-item">Holidays</li>
    <li class="nav-item">Forex</li>
    <li class="nav-item">Insurance</li>
    <li class="nav-item">My Trips</li>
    <li class="nav-item manage-booking">Manage Booking</li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
