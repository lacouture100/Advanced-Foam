import Head from 'next/head'
import Layout from '../components/layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import "../../styles/Post.css"


export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    // Make request for posts.
    const response = await axios.get( `http://www.advancedfoam.com/wp-json/wp/v2/pages?slug=${'contact-us'}` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (

        <Layout >
        <h1 classname="post__title">{ this.props.post.title.rendered }</h1>
        <article
          className="post"
          dangerouslySetInnerHTML={ {
            __html: this.props.post.content.rendered
          } } />
      </Layout>
    )
  }
}
