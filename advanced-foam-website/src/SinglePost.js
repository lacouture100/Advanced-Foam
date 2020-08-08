import React, { Component } from 'react';
import './MainApp.css';
import Navbar from './NavBar'
import Clients from './Clients'
import ContactUs from './ContactUs'
import Footer from './Footer'
import SinglePost_Content from './SinglePost_Content'

// class component
class SinglePost extends Component {

 
  render() {

    return (
      <div className="StudioApp">
        <Navbar />
        <SinglePost_Content />
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default SinglePost;
