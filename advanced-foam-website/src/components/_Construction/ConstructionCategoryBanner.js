import React, { Component } from 'react';
import './ConstructionCategoryBanner.css';
import Card from '../Card';
import data from '../../data/main_data'

// class component
class ConstructionCategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Construction.projects
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

export default ConstructionCategoryBanner;
