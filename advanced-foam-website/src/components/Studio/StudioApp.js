import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StudioApp.css';

import StudioHero from './StudioHero'
import StudioHeroButtons from './StudioHeroButtons'
import StudioCategoryBanner from './StudioCategoryBanner';

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
      postData: this.props.data,
      studioPosts: []
    }
  }
/*
  getPosts = async () => {
     
    let res = await axios.get(studioUrl);
    let { data } = await res;

  
    this.setState({ 
      studioPosts: data 
    });
  };
  // TODO Change so that it loads after the page loads.
  componentDidMount = async () => {
    await this.getPosts();
  };
*/
 
  render() {
    const {  postData, studioPosts } = this.state;
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

StudioApp.propTypes = { postData : PropTypes.object.isRequired}

export default StudioApp;
