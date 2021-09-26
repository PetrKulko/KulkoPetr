import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="for__page">
        <main className="page">
          <Header />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={About} />
        </main>
        <Footer />
      </div>
    </ BrowserRouter>
  );
}

export default App;
