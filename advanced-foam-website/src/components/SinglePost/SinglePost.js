import React, { Component } from 'react';
import './SinglePost.css';
import Navbar from '../NavBar/NavBar'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import SinglePostContent from './SinglePostContent'
import data from '../../data/CategoryBanner_data'



// class component
class SinglePost extends Component {
  constructor(props){
    super(props);
    this.state={
      data: data.Studio.productions[0],
    }
  }
 
  render() {
    const {data} = this.state;
    return (
      <div className="StudioApp">
        <Navbar />
        <SinglePostContent property={data}/>
        <ContactUs />
        <Footer />

      </div>
    );
  }
}

export default SinglePost;
