import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Banner from './components/Banner.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
