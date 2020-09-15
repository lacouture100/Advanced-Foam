import React, { Component } from 'react';
import Link from 'next/link'
import '../../styles/Banner.css'
import { Fragment } from 'react';

import Card from './card'


// class component
export default class Banner extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: this.props.data
      }
    }
  
  
  
    render() {
      //this data comes all the way from the construction.js page
      const { data } = this.state;
  
      return (
        <div className="banner">
          <Fragment>
                      {/* Links */}
                      <h2 className="banner-title"> IN STOCK NOW</h2>
                      <div className="banner-content">
                      {
                          data.map((post, index) => {
                              return (
                              <Link key={index} href={ `/construction/${ post.slug }` }>
                                  <a  href={ `/construction/${ post.slug }` }>
                                <Card key={index} post={post} />
                                </a>
                              </Link>
                              )
                            })}
                      </div>
  
            </Fragment>
        </div>
      );
    }
  }
