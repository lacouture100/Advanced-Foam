import React, { Component } from 'react';
import './ConstructionCategoryBanner.css';
import Card from '../Card';
import data from '../../data/main_data'

// class component
class StudioCategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Studio.productions
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

export default StudioCategoryBanner;
