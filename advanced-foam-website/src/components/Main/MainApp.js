import React from 'react';
import './MainApp.css';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import MainHero from './MainHero'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

import {withRouter} from 'react-router';

// class component
function MainApp(){

    return (
      <div className="MainApp">
        <MainHero />
        <CategoryBanner />
        <Clients />
        <ContactUs />
        <Footer />

      </div>
    );
  
}

export default withRouter(MainApp);
