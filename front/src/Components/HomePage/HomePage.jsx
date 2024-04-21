import React, { useState } from 'react'
import backgroundImage from '../Assets/bg1.jpg';
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
    <div style={{ 
      height: '800px', 
      width: '100%', 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <div style={{ 
        color: '#d1a2a2', 
        display: 'inline-block', 
        padding: '50px', 
        marginTop: '150px', 
        marginLeft: '300px', 
        fontSize: '3rem',  
        fontWeight: '700', 
        textTransform: 'uppercase', 
        letterSpacing: '5px' 
      }}>
        <p>LET's COME WITH</p>
        <p>YAATRII TO</p>
        <p>EXPLORE THE WORLD!</p>
      </div>
      <TypewriterAnimation/>
      <div style={{ 
        color: 'rgb(215, 22, 118)', 
        marginTop: '65px', 
        marginLeft: '90px', 
        fontSize: '1em', 
        textTransform: 'uppercase', 
        letterSpacing: '5px', 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        Click here To Explore 
        <br></br><span>watch the video ------→</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ 
          position: 'relative', 
          width: '120px', 
          height: '40px', 
          margin: '10px', 
          backgroundColor: '#007bff', 
          borderRadius: '5px', 
          textAlign: 'center', 
          lineHeight: '40px' 
        }}>
          <button className='video-link' onClick={() => handleVideoClick('S6wJ0WDU650')}>
            Watch Video
          </button>
        </div>
        <div style={{ 
          position: 'relative', 
          width: '120px', 
          height: '40px', 
          margin: '10px', 
          backgroundColor: '#007bff', 
          borderRadius: '5px', 
          textAlign: 'center', 
          lineHeight: '40px' 
        }}>
          <button className='video-link' onClick={() => handleVideoClick('ZvLt_S4GzpY')}>
            Watch Video
          </button>
        </div>
        <div style={{ 
          position: 'relative', 
          width: '120px', 
          height: '40px', 
          margin: '10px', 
          backgroundColor: '#007bff', 
          borderRadius: '5px', 
          textAlign: 'center', 
          lineHeight: '40px' 
        }}>
          <button className='video-link' onClick={() => handleVideoClick('luDdKCXuKks')}>
            Watch Video
          </button>
        </div>
        <div style={{ 
          position: 'relative', 
          width: '120px', 
          height: '40px', 
          margin: '10px', 
          backgroundColor: '#007bff', 
          borderRadius: '5px', 
          textAlign: 'center', 
          lineHeight: '40px' 
        }}>
          <button className='video-link' onClick={() => handleVideoClick('kXy8HSzVhWg')}>
            Watch Video
          </button>
        </div>
        <div style={{ 
          position: 'relative', 
          width: '120px', 
          height: '40px', 
          margin: '10px', 
          backgroundColor: '#007bff', 
          borderRadius: '5px', 
          textAlign: 'center', 
          lineHeight: '40px' 
        }}>
          <button className='video-link' onClick={() => handleVideoClick('SmBLLWDg-9Q')}>
            Watch Video
          </button>
        </div>
      </div>
      {isVideoOpen && (
        <div style={{ 
          position: 'fixed', 
          top: '0', 
          left: '0', 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          zIndex: '9999' 
        }} onClick={handleCloseVideo}>
          <div style={{ width: '640px', height: '360px' }}>
            <YouTube videoId={videoId} />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage;
