import React, { Component } from 'react';
import './MainApp.css';
import Navbar from './NavBar'
import Clients from './Clients'
import ContactUs from './ContactUs'
import Footer from './Footer'
import SinglePost_Content from './SinglePost_Content'
import data from './data/CategoryBanner_data'



// class component
class SinglePost extends Component {
  constructor(props){
    super(props);
    this.state={
      data: data.Studio[0],
    }
  }
 
  render() {
    const {data} = this.state;
    return (
      <div className="StudioApp">
        <Navbar />
        <SinglePost_Content property={data}/>
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default SinglePost;
