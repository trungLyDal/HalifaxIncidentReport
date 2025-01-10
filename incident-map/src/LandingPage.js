import React from 'react';

const LandingPage = () => {
  // Scroll to the bottom of the page when the button is clicked
  const handleStartClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1><b>WELCOME TO HIT</b></h1>
        <p>Halifax Incident Tracker</p>
        <button className="animated-button" onClick={handleStartClick}>
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">GET STARTED</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
