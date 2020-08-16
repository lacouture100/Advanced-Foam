import React, { Component } from 'react';
import './StudioApp.css';
import StudioCategoryBanner from './StudioCategoryBanner';
import StudioHero from './StudioHero'
import StudioHeroButtons from './StudioHeroButtons'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

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

export default StudioApp;
