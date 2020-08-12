import React, { Component } from 'react';
import './StudioApp.css';
import StudioCategoryBanner from './StudioCategoryBanner';
import StudioHero from './StudioHero'
import StudioHeroButtons from './StudioHeroButtons'
import Navbar from '../NavBar/NavBar'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

// class component
class MainApp extends Component {

 
  render() {

    return (
      <div className="StudioApp">
        <Navbar property={{"name":"Studio"}}/>
        <StudioHero />
        <StudioHeroButtons />
        <StudioCategoryBanner />
        <Clients />
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default MainApp;
