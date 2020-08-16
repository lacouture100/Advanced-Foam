import React, { Component } from 'react';
import './StudioCategoryBanner.css';
import Card from '../Card';
import data from '../../data/main_data'
import SinglePost from '../SinglePost/SinglePost'
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

// class component
class StudioCategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Studio.productions
    }
  }



  render() {
    const mainRoute = '/Studio'
    const productions = this.state.property.map((value)=>(
      <div >
        <Link className="navbar-title"
                   to={`${mainRoute}/${value.slug}`} >
        <Card key={value._id} property= {value}  />
        </Link>
      </div>
    ))
    
    return (
      <div className="studio-banner">
        {productions}
        <Route path={`/Studio/:postId`} 
               component={SinglePost} 
               />
      </div>
    );
  }
}

export default StudioCategoryBanner;
