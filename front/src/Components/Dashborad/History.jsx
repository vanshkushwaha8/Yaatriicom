// History.js
import React from 'react';
import './History.css'; // Import CSS for styling

const History = () => {
  return (
    <div className="history-container">
      <h2>History</h2>
      <div className="history-content">
        <p>Welcome to your history page. Here, you can view your past activities and interactions.</p>
        <div className="activity-list">
          <div className="activity-item">
            <h3>Product Purchase</h3>
            <p>You bought Product X on Date.</p>
          </div>
          <div className="activity-item">
            <h3>Feedback Submitted</h3>
            <p>You submitted feedback on Date.</p>
          </div>
          {/* Add more activity items as needed */}
        </div>
      </div>
    </div>
  );
};

export default History;
