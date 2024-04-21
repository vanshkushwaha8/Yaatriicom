import React, { useState } from 'react'
import './HomePage.css'
import backgroundImage from '../../../../Assets/bg1.jpg';
import TypewriterAnimation from '../TypewriterAnimation'
import YouTube from 'react-youtube';

const HomePage = () => {
  const [videoId, setVideoId] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to handle when a video link is clicked
  const handleVideoClick = (videoId) => {
    setVideoId(videoId);
    setIsVideoOpen(true);
  };

  // Function to close the video
  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setVideoId(null);
  };
  return (
    <div className='container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='container-para'>
        <p>LET's COME WITH</p>
        <p>YAATRII TO</p>
        <p>EXPLORE THE WORLD!</p>
      </div>
      <TypewriterAnimation/>
      <div className="container-text">
      Click here To Explore 
      <br></br><span>watch the video ------→</span>
     
      <div className='containers-boxs'>

    <div className="containers-box" id='box1'>
    <button className='video-link' onClick={() => handleVideoClick('S6wJ0WDU650')}>
              Watch Video
            </button>
    </div>

    <div className="containers-box" id='box2'>
    <button className='video-link' onClick={() => handleVideoClick('ZvLt_S4GzpY')}>
              Watch Video
            </button>
    </div>

    <div className="containers-box" id='box3'>
    <button className='video-link' onClick={() => handleVideoClick('luDdKCXuKks')}>
              Watch Video
            </button>
    </div>

    <div className="containers-box" id='box4'>
    <button className='video-link' onClick={() => handleVideoClick('kXy8HSzVhWg')}>
              Watch Video
            </button>
    </div>

    <div className="containers-box" id='box5'>
    <button className='video-link' onClick={() => handleVideoClick('SmBLLWDg-9Q')}>
              Watch Video
            </button>    </div>
    </div>
    </div> 
 
    {isVideoOpen && (
        <div className="video-player-overlay" onClick={handleCloseVideo}>
          <div className="video-player">
            <YouTube videoId={videoId} />
          </div>
        </div>
      )}


    </div>
  )
}

export default HomePage
