import React from 'react';


const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to HIT</h1>
        <p>Halifax Incident Tracker</p>
        <button className = "start" onClick={onStart}>GET INFORMED</button>
      </div>
    </div>
  );
};

export default LandingPage;
