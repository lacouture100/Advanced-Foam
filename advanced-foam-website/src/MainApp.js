import React, { Component } from 'react';
import './MainApp.css';
import App from './App';
import HeroMain from './HeroMain'
import Navbar from './NavBar'
import Clients from './Clients'
import Footer from './Footer'

// class component
class MainApp extends Component {

 
  render() {

    return (
      <div className="MainApp">
        <Navbar />
        <HeroMain />
        <App />
        <Clients />
        <Footer />

      </div>
    );
  }
}

export default MainApp;
