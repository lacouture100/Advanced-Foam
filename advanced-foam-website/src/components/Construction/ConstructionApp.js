import React from 'react';
import './ConstructionApp.css';
import ConstructionProductsBanner from './ConstructionProductsBanner';
import ConstructionProjectBanner from './ConstructionProjectBanner';
import ConstructionHero from './ConstructionHero'
import ConstructionHeroButtons from './ConstructionHeroButtons'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import SinglePost from '../SinglePost/SinglePost'
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';


// class component
function ConstructionApp() {
    return (
      <div className="ConstructionApp">
        <ConstructionHero />
        <ConstructionHeroButtons />
        <ConstructionProductsBanner />
        <ConstructionProjectBanner />
        <Clients />
        <ContactUs />
        <Footer />


      </div>
    );
}

export default ConstructionApp;
