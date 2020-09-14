import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/ConstructionProductsBanner.css';
import Card from '../Main/MainCard';
import Link from 'next/link'


// class component
export default class ConstructionProductsBanner extends Component {

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
      <div className="products-banner">
        <Fragment>
                    {/* Links */}
                    <h2 className="products-banner-title"> IN STOCK NOW</h2>
                    <div className="products-banner-content">
                    {
                        data.map((post, index) => {
                            return (
                            
                            <Link key={index} href={ `/construction/${ post.slug }` }>
                              <a href={ `/construction/${ post.slug }` }>
                              <div key={index} id={`card-${post.index}`} className="card">
            
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

ConstructionProductsBanner.propTypes = { data : PropTypes.array.isRequired}

