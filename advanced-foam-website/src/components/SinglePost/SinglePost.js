import React, { Component } from 'react';
import './SinglePost.css';
import Navbar from '../NavBar/NavBar'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import SinglePostContent from './SinglePostContent'
import Data from '../../data/main_data'

let data = Data.Studio.productions[0];

// class component
const SinglePost = ({ match }) =>( 
        <div className="StudioApp">
        <Navbar />
        <SinglePostContent property={data} link={match.params.postId}/>
        <ContactUs />
        <Footer />

      </div>

)

export default SinglePost;
