import React, { Component } from 'react';
import './ConstructionApp.css';
import ConstructionProductsBanner from './ConstructionProductsBanner';
import ConstructionCategoryBanner from './ConstructionCategoryBanner';
import ConstructionHero from './ConstructionHero'
import ConstructionHeroButtons from './ConstructionHeroButtons'
import Navbar from '../NavBar/NavBar'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

// class component
class ConstructionApp extends Component {

 
  render() {

    return (
      <div className="StudioApp">
        <Navbar property={{"name":"Construction"}}/>
        <ConstructionHero />
        <ConstructionHeroButtons />
        <ConstructionProductsBanner />
        <ConstructionCategoryBanner />
        <Clients />
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default ConstructionApp;
