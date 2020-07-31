import React, { Component } from 'react';
import './App.css';
import App from './App';
import HeroMain from './HeroMain'
import Navbar from './NavBar'

// class component
class MainApp extends Component {

 
  render() {

    return (
      <div className="MainApp">
        <Navbar />
        <HeroMain />
        <App />
        
      </div>
    );
  }
}

export default MainApp;
