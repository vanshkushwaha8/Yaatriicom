import React, { useState, useEffect } from 'react';

const TourGuideDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks from the server on component mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      // Make a request to fetch feedbacks
      const response = await fetch('/api/feedbacks');
      
      if (!response.ok) {
        throw new Error('Failed to fetch feedbacks');
      }

      // Assuming the backend returns an array of feedbacks
      const fetchedFeedbacks = await response.json();
      setFeedbacks(fetchedFeedbacks);
    } catch (error) {
      console.error('Error fetching feedbacks:', error.message);
      // Optionally, show an error message to the user
    }
  };

  const handleFeedbackEdit = async (feedbackId, newContent) => {
    try {
      // Make a request to update the feedback
      const response = await fetch(`/api/edit-feedback/${feedbackId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit feedback');
      }

      // Update the feedback content locally
      const updatedFeedbacks = feedbacks.map(feedback => {
        if (feedback.id === feedbackId) {
          return { ...feedback, content: newContent };
        }
        return feedback;
      });
      setFeedbacks(updatedFeedbacks);

      console.log('Feedback edited successfully');
    } catch (error) {
      console.error('Error editing feedback:', error.message);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div>
      <h2>Tour Guide Dashboard</h2>

      {/* Feedbacks Section */}
      <div>
        <h3>Feedbacks</h3>
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index}>
              <div>
                <strong>Client Name:</strong> {feedback.clientName}
              </div>
              <div>
                <strong>Content:</strong> {feedback.content}
              </div>
              <div>
                <button onClick={() => handleFeedbackEdit(feedback.id, 'New content')}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourGuideDashboard;
