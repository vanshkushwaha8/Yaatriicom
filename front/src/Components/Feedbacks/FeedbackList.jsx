import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './FeedbackList.css';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/feedback/get');
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div style={{ marginTop: '20px' }} className="feedback-list">
  <h2 style={{ textAlign: 'center', color: '#3498db', fontSize: '24px' }}>Feedback List</h2>
  {feedbackList.length === 0 ? (
    <p style={{ margin: '5px 0', color: '#333', fontSize: '16px' }}>No feedback available.</p>
  ) : (
    <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundImage: 'linear-gradient(to left, #4c4141 , #a36363)' }}>
      {feedbackList.map((feedback, index) => (
        <li key={index} style={{ border: '1px solid #3498db', borderRadius: '8px', margin: '10px', padding: '20px', backgroundColor: '#4f8693', boxShadow: '0px 0px 15px rgba(52, 152, 219, 0.1)', opacity: 0, transform: 'translateY(20px)', animation: 'fadeInUp 0.5s forwards ease-out', transition: 'transform 0.3s, box-shadow 0.3s' }}>
          <strong>Tour Guide Friendliness:</strong> {feedback.tourGuideFriendliness} stars<br />
          <strong>Tour Guide Knowledge:</strong> {feedback.tourGuideKnowledge} stars<br />
          <strong>Tour Package Organization:</strong> {feedback.tourPackageOrganization} stars<br />
          <strong>Tour Package Variety:</strong> {feedback.tourPackageVariety} stars<br />
          <strong>Overall Satisfaction:</strong> {feedback.overallSatisfaction} stars<br />
          <strong>Additional Comments:</strong> {feedback.comments}<br />
          <strong>Date Submitted:</strong> {new Date(feedback.dateSubmitted).toLocaleString()}
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default FeedbackList;