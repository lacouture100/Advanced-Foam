import React, { Component } from 'react';
import Link from 'next/link'
//import '../../styles/Card.css'
import { Fragment } from 'react';

// class component
export default class Card extends Component {

    constructor(props){
      super(props);
      this.state = {
        post: this.props.post
      }
    }
  
  
  
    render() {
      //this data comes all the way from the construction.js page
      const { post } = this.state;
  
      return (

        
        
       
        <div id={`card-${post.id}`} className="card">

        {/* The imgSrc was grabbed using a WP plugin fro better access to media*/}
            <img src={`${post.better_featured_image.media_details.sizes.thumbnail.source_url}`} 
                alt=" " 
                className="card-image" />
                
            <div className="details">
                <h3 className="card-title">
                    {post.title.rendered}
                </h3>
                <div className="card-title-line"></div>
                <h4 className="card-subtitle">
                    {/*property.status*/}
                </h4>
            
            </div>
            
        </div>

        
    
                           
      );
    }
  }

