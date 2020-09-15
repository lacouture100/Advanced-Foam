import React, { useState } from 'react';
import Link from 'next/link'
//import '../../styles/Card.css'
import { Fragment } from 'react';


  export default function Card(props) {
    const [post,setPost] = useState(props.post);

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

