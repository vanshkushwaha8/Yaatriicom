import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackList from './FeedbackList.jsx';
// import './FeedbackForm.css';

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [tourGuideFriendliness, setTourGuideFriendliness] = useState(0);
  const [tourGuideKnowledge, setTourGuideKnowledge] = useState(0);
  const [tourPackageOrganization, setTourPackageOrganization] = useState(0);
  const [tourPackageVariety, setTourPackageVariety] = useState(0);
  const [overallSatisfaction, setOverallSatisfaction] = useState(0);
  const [comments, setComments] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the backend when the component mounts
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/feedback');
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFeedback = {
      tourGuideFriendliness,
      tourGuideKnowledge,
      tourPackageOrganization,
      tourPackageVariety,
      overallSatisfaction,
      comments,
      dateSubmitted: new Date().toISOString(),
    };

    try {
      // Post new feedback to the backend
      await axios.post('http://localhost:8080/api/feedback/post', newFeedback);

      // Update feedback list locally
      setFeedbackList((prevList) => [...prevList, newFeedback]);

      // Pass the new feedback to the parent component
      onFeedbackSubmit(newFeedback);

      // Reset form fields
      setTourGuideFriendliness(0);
      setTourGuideKnowledge(0);
      setTourPackageOrganization(0);
      setTourPackageVariety(0);
      setOverallSatisfaction(0);
      setComments('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const renderStars = (ratingState, setRatingState) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= ratingState ? 'filled' : ''}`}
          onClick={() => setRatingState(i)}
          style={{ cursor: 'pointer' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  
  

  return (
    <div style={{ 
      width: '100%', 
      margin: '0 auto', 
      padding: '20px', 
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(to bottom, #f8f9fa, #dee2e6)' 
    }} className="feedback-form">
      <h2 style={{ 
        textAlign: 'center' 
      }} className='feedback-formH1'>Yaatrii.com Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }} className='feedback-formLabel'>How would you rate the friendliness and helpfulness of your tour guide?</label>
          <div className="star-rating">{renderStars(tourGuideFriendliness, setTourGuideFriendliness)}</div>
        </div>
    
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }}>Rate the quality of information provided by your tour guide about the places visited.</label>
          <div className="star-rating">{renderStars(tourGuideKnowledge, setTourGuideKnowledge)}</div>
        </div>
    
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }}>How would you rate the overall organization and planning of the tourist package?</label>
          <div className="star-rating">{renderStars(tourPackageOrganization, setTourPackageOrganization)}</div>
        </div>
    
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }}>Rate the variety and appeal of activities included in the tourist package.</label>
          <div className="star-rating">{renderStars(tourPackageVariety, setTourPackageVariety)}</div>
        </div>
    
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }}>How would you rate the overall enjoyment and satisfaction of your tour experience?</label>
          <div className="star-rating">{renderStars(overallSatisfaction, setOverallSatisfaction)}</div>
        </div>
    
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '10px' 
          }}>Any additional comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            style={{ 
              width: '100%', 
              resize: 'vertical' 
            }}
          />
        </div>
    
        <button className='form' type="submit" style={{ 
          display: 'block', 
          margin: '20px auto' 
        }}>Submit Feedback</button>
      </form>
      {/* Use FeedbackList component to display the list */}
      {/* <FeedbackList feedbackList={feedbackList} /> */}
      <FeedbackList/>
    </div>
    

    
  );
};

export default FeedbackForm;