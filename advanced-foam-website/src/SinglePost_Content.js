import React, { Component } from 'react';
import './SinglePost_Content.css';
import * as apiCall from './API_wordpress'
import { render } from '@testing-library/react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';


const APIURL = 'www.advancedfoam.com/wp-json/wp/v2/';
const QUERY = 'posts?slug=';

// class component
class SinglePost_Content extends Component{
 constructor(props){
   super(props);

  this.state={
    isLoaded: false,
    title : this.props.property.title,
    link : this.props.property.link,
    _id : this.props.property._id,
    slug : this.props.property.slug,
    excerpt : '',
    text : 'Loading...',
    postTitle : '',
    //imgUrl : ''
  }
   
  this.loadPost = this.loadPost.bind(this)
 }

 async loadPost(url){
  let postData =  await apiCall.getPost(url)
  return postData;
  
 }

  cleanPost(html){
    let cleanHTML = DOMPurify.sanitize(html);
    return cleanHTML;
  }
 
  
   componentDidMount(){
    //let postData = apiCall.getPost('www.advancedfoam.com/wp-json/wp/v2/posts')
    const data = this.loadPost(`${APIURL}${QUERY}${this.state.slug}`).then(response =>{
      const post = response[0];
      const content = post.content.rendered;
      const postTitle = post.title.rendered;
      const featuredMedia = post.featured_media;
      
      const excerpt = post.excerpt;
      //const cleanPost = cleanPost(content);
      console.log(post);
      this.setState({
        isLoaded: true,
        text: content,
        postTitle : postTitle,
        excerpt : excerpt,
        //imgUrl : imgUrl
      })
/*
      this.loadPost(`${APIURL}media/${post.featured_media}`).then(response =>{
        const imgUrl = response.source_url;
        
        
      })*/

      
      })
    
    //this.setState({id:data[0].id})
   }
    
  
    
  
  render(){
    const {postTitle,  text} = this.state;
    return (
      <div className="post-main">
        <h1 className="post-main-title">{postTitle}</h1>
        
 
        <div className="post-main-content" dangerouslySetInnerHTML={{__html: text}}></div>
      </div>
    );
  }
}

SinglePost_Content.propTypes = { property : PropTypes.object.isRequired}

export default SinglePost_Content;



/*
 Wordpress Post API Object

{

author: 1
categories: [3]
comment_status: "open"
content: {rendered: "<p><iframe src="http://www.youtube.com/embed/8ETDE…le model of the U.S.S. Enterprise spaceship.</p>↵", protected: false}
date: "2011-06-26T12:10:42"
date_gmt: "2011-06-26T19:10:42"
excerpt: {rendered: "<p>For the 2009 science fiction and adventure film…le model of the U.S.S. Enterprise spaceship.</p>↵", protected: false}
featured_media: 0
format: "standard"
guid: {rendered: "http://test.advancedfoam.com/?p=21"}
id: 21
jetpack_featured_media_url: ""
link: "http://www.advancedfoam.com/star-trek/"
meta: []
modified: "2020-08-10T17:08:01"
modified_gmt: "2020-08-11T00:08:01"
ping_status: "open"
slug: "star-trek"
status: "publish"
sticky: false
tags: []
template: ""
title: {rendered: "Star Trek"}
type: "post"
_links: {self: Array(1), collection: Array(1), about: Array(1), author: Array(1), replies: Array(1), …}
__proto__: Object
}

*/