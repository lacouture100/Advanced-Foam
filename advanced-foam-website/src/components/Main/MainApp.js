import React, { Component } from 'react';
import './MainApp.css';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import MainHero from './MainHero'
import Clients from '../Clients/Clients'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

import {withRouter} from 'react-router-dom';

// class component
class MainApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      studioData: [],
      constructionData: this.props.constructionData,
      packagingData: this.props.packagingData
    }
  }

  componentDidUpdate(previousProps, previousState){
    if(previousProps.studioData !== this.props.studioData){
    this.setState({ 
      studioData : this.props.studioData
    }, () => {
      //console.log(this.state.studioData, 'data in Main App');
    }); 
    }else {
      return ;
    }

    
  }

  render(){
    const { studioData, constructionData, packagingData} = this.state;
    //console.log(this.props.studioData)
    return (
      <div className="MainApp">
        <MainHero />
        <CategoryBanner   studioData={studioData}
                          constructionData={constructionData}
                          packagingData={packagingData}
        />
        <Clients />
        <ContactUs />
        <Footer />

      </div>
    );
    }
}


export default withRouter(MainApp);
