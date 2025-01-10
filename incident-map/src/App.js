import './App.css';
import Header from './header'
import React from 'react';
import MapComponent from './MapComponent';
import Landing from './LandingPage';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <AboutUs/>
      <MapComponent />
    </div>
  );
};

export default App;
