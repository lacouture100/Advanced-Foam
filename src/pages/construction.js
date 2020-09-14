import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ConstructionApp from '../components/Construction/ConstructionApp'

const LINK = 'https://www.construction.advancedfoam.com/wp-json/wp/v2/posts';
export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( LINK );
    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Advanced Foam - Construction</title>
          <meta name="Advanced Foam Inc. Construction site" content="Advanced Foam stocks many different construction materials such as EPS sheets, DOW Styrofoam, foam sheets, adhesives and more." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigation site="construction"/>
        <ConstructionApp data={this.props.posts}/>
      </Fragment>
    )
  }
}
