import React, { Component } from 'react';
import './MainApp.css';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import MainHero from './MainHero'
import Navbar from '../NavBar/NavBar'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

// class component
class MainApp extends Component {

 
  render() {

    return (
      <div className="MainApp">
        <Navbar property={{"name":"Main"}}/>
        <MainHero />
        <CategoryBanner />
        <Clients />
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default MainApp;
