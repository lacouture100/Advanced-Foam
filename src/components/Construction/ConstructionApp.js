import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/ConstructionApp.css';

import ConstructionHero from './ConstructionHero'
import ConstructionHeroButtons from './ConstructionHeroButtons'
import ConstructionProductsBanner from './ConstructionProductsBanner';
//import ConstructionProjectBanner from './ConstructionProjectBanner';

import Clients from '../Clients'
import ContactUs from '../ContactUs'
import Footer from '../Footer'


// class component
class ConstructionApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  render(){
    const { data } = this.state;
    return (
      <div className="ConstructionApp">
        <ConstructionHero />
        <ConstructionHeroButtons />
        <ConstructionProductsBanner data={data}/>
        <Clients />
        <ContactUs />
        <Footer />


      </div>
    );
  }
}

ConstructionApp.propTypes = { data : PropTypes.array.isRequired}


export default ConstructionApp;
