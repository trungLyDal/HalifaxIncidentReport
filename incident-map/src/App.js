import './App.css';
import Header from './header'
import React from 'react';
import MapComponent from './MapComponent';
import Landing from './LandingPage';
import Socials from './Socials';
import Footer from './footer';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Socials/>
      <MapComponent />
      <Footer/>
    </div>
  );
};

export default App;
