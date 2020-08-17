import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StudioApp.css';
import StudioCategoryBanner from './StudioCategoryBanner';
import StudioHero from './StudioHero'
import StudioHeroButtons from './StudioHeroButtons'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

import axios from 'axios'

const studioUrl = "http://studio.advancedfoam.com/wp-json/wp/v2/posts";
// class component
class StudioApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      postData: this.props.data
    }
  }
 
  render() {
    const {  postData } = this.state;
    return (
      <div className="StudioApp">
        <StudioHero />
        <StudioHeroButtons />
        <StudioCategoryBanner data={postData}/>
        <Clients />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

//StudioApp.propTypes = { postData : PropTypes.object.isRequired}

export default StudioApp;
