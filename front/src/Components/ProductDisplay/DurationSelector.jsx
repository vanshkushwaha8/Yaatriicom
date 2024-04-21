import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DurationSelector.css'; // Import the CSS file

const DurationSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    if (startDate && endDate) {
      setSubmitted(true);
    } else {
      alert('Please choose start and end dates.');
    }
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSubmitted(false);
  };

  const calculateDuration = () => {
    if (startDate && endDate) {
      const diffInTime = endDate.getTime() - startDate.getTime();
      const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
      return diffInDays;
    }
    return 0;
  };

  return (
    <div className="duration-selector">
      {submitted ? (
        <div>
          <p>Done!</p>
          <p>Tour is now ready to book for selected date.</p>
          <button className="reset-button" onClick={handleReset}>Reset</button> {/* Show reset button */}
        </div>
      ) : (
        <div>
          <p><strong >Duration:</strong> {calculateDuration()} days</p>
          <div>
  <label>Start Date:</label>{' '}
  <DatePicker
    selected={startDate}
    onChange={handleStartDateChange}
    placeholderText="Select start date" // Placeholder for start date
  />
</div>
<div>
  <label>End Date:</label>{' '}
  <DatePicker
    selected={endDate}
    onChange={handleEndDateChange}
    placeholderText="Select end date" // Placeholder for end date
  />
</div>

          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default DurationSelector;
