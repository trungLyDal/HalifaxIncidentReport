import './App.css';
import Header from './header'
import React from 'react';
import MapComponent from './MapComponent';
import Landing from './LandingPage';
import AboutUs from './AboutUs';
import Footer from './footer';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <AboutUs/>
      <MapComponent />
      <Footer/>
    </div>
  );
};

export default App;
