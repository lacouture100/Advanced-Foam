import React, { Component } from 'react';
import './Studio_CategoryBanner.css';
import Card from './Card';
import data from './data/StudioBanner_data'

// class component
class Studio_CategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Productions
    }
  }



  render() {
    const productions = this.state.property.map((value)=>(
      <div >
        <Card key={value._id} property= {value}  />
      </div>
    ))
    
    return (
      <div className="studio-banner">
        {productions}


      </div>
    );
  }
}

export default Studio_CategoryBanner;
