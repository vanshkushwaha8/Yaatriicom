import React from 'react';
import './Tour.css'; // Importing CSS file for styling
import FilterPackage from './FilterPackage';
import backgroundImage1 from '../Assets/bg2.jpg'


const Tour = () => {
  return (
    <>
   <div className="tour-containerg">
      
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
      
      {/* Filter section */}
      <div className="filter-section">
        <h1>Find Your Perfect Tour</h1>
        <div className="filter-dropdowns">
          <select name="destination" id="destination">
            <option value="">Select Destination</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
          </select>
          <select name="duration" id="duration">
            <option value="">Select Duration</option>
            <option value="1-week">1 Week</option>
            <option value="2-weeks">2 Weeks</option>
            <option value="1-month">1 Month</option>
          </select>
          <select name="price" id="price">
            <option value="">Select Price Range</option>
            <option value="1000">$1000 - $2000</option>
            <option value="2000">$2000 - $3000</option>
            <option value="3000">$3000 - $4000</option>
            <option value="4000">$4000+</option>
          </select>
          <button>Apply Filters</button>
        </div>
      </div>
     
    </div>
    <FilterPackage/>
    </>
    
  );
}

export default Tour;
