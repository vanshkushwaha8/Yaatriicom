import React, { useState } from 'react';
import './TransportSelector.css'; // Import the CSS file

const TransportSelector = () => {
  const [transport, setTransport] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const handleTransportChange = (event) => {
    setTransport(event.target.value);
  };

  const handleReset = () => {
    setTransport('');
    setSelectedMode('');
  };

  const handleSubmit = () => {
    if (transport) {
      setSelectedMode(transport);
    }
  };

  return (
    <div className="transport-selector">
      <p><strong>Mode of Transport:</strong></p>
      <select value={transport} onChange={handleTransportChange}>
        <option value="">Select mode of transport</option>
        <option value="flight">Flight</option>
        <option value="train">Train</option>
        <option value="bus">Bus</option>
        <option value="car">Car</option>
      </select>
      {selectedMode && (
        <p>Selected mode of transport: {selectedMode}</p>
      )}
      {selectedMode && (
        <div className='reset'>
          <button className='reset-button' onClick={handleReset}>Reset</button>
        </div>
      )}
      {!selectedMode && (
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default TransportSelector;
