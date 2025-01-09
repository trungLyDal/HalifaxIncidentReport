import './App.css';
import Header from './header'
import React from 'react';
import MapComponent from './MapComponent';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MapComponent />
    </div>
  );
};

export default App;
