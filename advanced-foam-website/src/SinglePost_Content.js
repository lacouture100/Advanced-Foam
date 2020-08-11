import React, { Component } from 'react';
import './SinglePost_Content.css';
import * as apiCall from './API_wordpress'
import { render } from '@testing-library/react';
import DOMPurify from 'dompurify';

// class component
class SinglePost_Content extends Component{
 constructor(props){
   super(props);
  this.state={
    title : this.props.property.title,
    link : this.props.property.link,
    _id : this.props.property._id,
    slug : this.props.property.slug,
    //post : 'mummy',
    text : '',
    postTitle : 'a'
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
    const data = this.loadPost(`www.advancedfoam.com/wp-json/wp/v2/posts?slug=${this.state.slug}`).then(response =>{
      const post = response[0];
      const content = response[0].title.rendered;
      //const cleanPost = cleanPost(content);
      //console.log(content);
      //var StrippedString = content.replace(/(<([^>]+)>)/ig,"");
      this.setState({
        text:response[0].content.rendered
      })
          })
    
    //this.setState({id:data[0].id})
   }
    
  
    
  
  render(){
    const {postTitle, link, text} = this.state;
    

    return (
      <div className="post-content-main">
        
        <p dangerouslySetInnerHTML={{__html: text}}></p>
      </div>
    );
  }
}

export default SinglePost_Content;




