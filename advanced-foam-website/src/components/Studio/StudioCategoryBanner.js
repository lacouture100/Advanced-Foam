import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import './StudioCategoryBanner.css';
import Card from '../Card';

import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

import SinglePost from '../SinglePost/SinglePost'


// class component
class StudioCategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: this.props.data
    }
  }



  render() {
    const { posts } = this.state;
    const mainRoute = '/Studio'
    console.log(posts)
    
    return (
      <div className="studio-banner">
        <div className="studio-banner-content">
        <Fragment>
                    {/* Links */}

                  
                        {posts.map((post, index) => {
                            return <Link to={`/Studio/${post.slug}`}>
                            <Card key={post.id} property={post}  />
                            </Link>;
                        })}
                    

                    {/* Routing */}
                     
                    
                </Fragment>
                </div>
      </div>
    );
  }
}

StudioCategoryBanner.propTypes = { posts : PropTypes.object.isRequired}

export default StudioCategoryBanner;
