import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ConstructionApp.css';

import ConstructionHero from './ConstructionHero'
import ConstructionHeroButtons from './ConstructionHeroButtons'
import ConstructionProductsBanner from './ConstructionProductsBanner';
import ConstructionProjectBanner from './ConstructionProjectBanner';

import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'


// class component
class ConstructionApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      postData: this.props.data
    }
  }
  render(){
    const {  postData } = this.state;
    return (
      <div className="ConstructionApp">
        <ConstructionHero />
        <ConstructionHeroButtons />
        <ConstructionProductsBanner data={postData}/>
        <Clients />
        <ContactUs />
        <Footer />


      </div>
    );
  }
}

ConstructionApp.propTypes = { postData : PropTypes.object.isRequired}


export default ConstructionApp;
