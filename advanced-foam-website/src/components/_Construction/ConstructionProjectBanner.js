import React, { Component } from 'react';
import './ConstructionProjectBanner.css';
import Card from '../Card';
import data from '../../data/main_data'

// class component
class ConstructionProjectBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Construction.projects
    }
  }

  render() {
    const productions = this.state.property.map((value)=>(
      <div >
        <Card key={value.index} property= {value}  />
      </div>
    ))
    
    return (
      <div className="studio-banner">
        {productions}

      </div>
    );
  }
}

export default ConstructionProjectBanner;
