import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/topNavigation';

import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Routes /> 
    </div>
  );
}

export default App;
