import './App.css';
import Header from './header'
import React from 'react';
import MapComponent from './MapComponent';
import Landing from './LandingPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <MapComponent />
    </div>
  );
};

export default App;
