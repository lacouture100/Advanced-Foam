import React, { Component } from 'react';
import '../../../styles/MainApp.css';
import CategoryBanner from './CategoryBanner';
import MainHero from './MainHero'

import Clients from '../Clients'
import ContactUs from '../ContactUs'
import Footer from '../Footer'


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


export default MainApp;
