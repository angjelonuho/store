import React from 'react';
import './App.css';
import MiniDrawer from './components/dashboardNavigation';
import ProductBody from './components/mainProducts';
import PrimarySearchAppBar from './components/topNavigation';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      {/* <MiniDrawer /> */}
      <ProductBody/>
  
    </div>
  );
}

export default App;
