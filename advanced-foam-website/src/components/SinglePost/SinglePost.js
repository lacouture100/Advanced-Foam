import React, { Component } from 'react';
import './SinglePost.css';
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import SinglePostContent from './SinglePostContent'

// class component
const SinglePost = ({ post }) =>( 
        <div className="post">
        <SinglePostContent post={post} />
        <ContactUs />
        <Footer />
      </div>

)

export default SinglePost;
