import React, { Component } from 'react';
import './MainApp.css';
import Studio_CategoryBanner from './Studio_CategoryBanner';
import Studio_HeroMain from './Studio_HeroMain'
import Navbar from './NavBar'
import Clients from './Clients'
import ContactUs from './ContactUs'
import Footer from './Footer'

// class component
class SingleBlogPost extends Component {

 
  render() {

    return (
      <div className="StudioApp">
        <Navbar />
        <Studio_HeroMain />
        <Studio_CategoryBanner />
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default SingleBlogPost;
