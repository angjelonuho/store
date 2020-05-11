import React from 'react';
import './css/App.css';
import PrimarySearchAppBar from './components/topNavigation';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PrimarySearchAppBar/>
      <Routes /> 
    </div>
    </Provider>
  );
}

export default App;
