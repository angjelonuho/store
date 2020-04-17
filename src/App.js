import React from 'react';
import './App.css';
import MiniDrawer from './components/dashboardNavigation';
import MediaCard from './components/mainProducts';
import PrimarySearchAppBar from './components/topNavigation';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      {/* <MiniDrawer /> */}
      <MediaCard/>
  
    </div>
  );
}

export default App;
