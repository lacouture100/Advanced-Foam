import React, { Component } from 'react';
import './MainApp.css';
import CategoryBanner from './CategoryBanner';
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
        <CategoryBanner />
        <Clients />
        <Footer />

      </div>
    );
  }
}

export default MainApp;
