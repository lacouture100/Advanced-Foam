import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'


import React, { Component, Fragment } from 'react'
import axios from 'axios'

const LINK = 'http://www.studio.advancedfoam.com/wp-json/wp/v2/posts';
export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( LINK )
    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Advanced Foam Inc. - Studio</title>
          <meta name="Advanced Foam Inc. Studio work" content="25+ years of experience in foam fabrication for the Southern California studio and movie production industry." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigation site="studio"/>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
                <li key={ post.id }>
                  <Link href={ `/studio/${ post.slug }` }>
                    <a href={ `/studio/${ post.slug }` }>
                      { post.title.rendered }
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
