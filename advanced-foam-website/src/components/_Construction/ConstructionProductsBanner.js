import React, { Component } from 'react';
import './ConstructionProductsBanner.css';
import Card from '../Card';
import data from '../../data/main_data'

// class component
class ConstructionProductsBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Construction.products
    }
  }

  render() {
    const productions = this.state.property.map((value)=>(
      <div >
        <Card key={value._id} property= {value} className="card"  />
      </div>
    ))
    
    return (
      <div className="products-banner">
        <h2 className="products-banner-title"> IN STOCK NOW!</h2>
        <div className="products-banner-content">
          {productions}
        </div>
      </div>
    );
  }
}

export default ConstructionProductsBanner;
