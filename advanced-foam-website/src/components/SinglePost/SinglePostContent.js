import React, { Component } from 'react';
import './SinglePostContent.css';
import * as apiCall from '../WordpressAPI/API_wordpress'
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';


const APIURL = 'www.advancedfoam.com/wp-json/wp/v2/';
const QUERY = 'posts?slug=';

// class component
class SinglePostContent extends Component{
 constructor(props){
   super(props);

  this.state={
    isLoaded: false,
    title : this.props.property.title,
    link : this.props.property.link,
    _id : this.props.property._id,
    slug : this.props.property.slug,
    postExcerpt : '',
    postContent : 'Loading...',
    postTitle : '',
    postId : this.props.link
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
    console.log(this.state.link , this.state.postId)
    this.loadPost(`${APIURL}${QUERY}${this.state.slug}`).then(response =>{
      const post = response[0];
      const content = post.content.rendered;
      const postTitle = post.title.rendered;
      //const featuredMedia = post.featured_media;
      
      let excerpt = post.excerpt.rendered.toString();
      const substring = excerpt.replace(/(<([^>]+)>)/ig,"").substring(0, excerpt.indexOf('.')-1);
      
      //const cleanPost = cleanPost(content);
      console.log(post);
      this.setState({
        isLoaded: true,
        postContent: content,
        postTitle : postTitle,
        postExcerpt : substring,
        //imgUrl : imgUrl
      })
      
      })
    
   }
    
  
    
  
  render(){
    const {postTitle,  postContent, postExcerpt} = this.state;
    return (
      <div className="post-main">
        <h1 className="post-main-title">{postTitle}</h1>
        <h4 className="post-main-excerpt">{postExcerpt}</h4>
        
 
        <div className="post-main-content" dangerouslySetInnerHTML={{__html: postContent}}></div>
      </div>
    );
  }
}

SinglePostContent.propTypes = { property : PropTypes.object.isRequired}

export default SinglePostContent;



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