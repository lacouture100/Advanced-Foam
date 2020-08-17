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
    
    
    return (
      <div className="studio-banner">
        <Fragment>
                    {/* Links */}

                  
                        {posts.map((post, index) => {
                            return <Link to={`${post.slug}`}>
                            <Card key={post._id} property={post}  />
                            </Link>;
                        })}
                    

                    {/* Routing */}
                     
                    
                </Fragment>
      </div>
    );
  }
}

StudioCategoryBanner.propTypes = { posts : PropTypes.object.isRequired}

export default StudioCategoryBanner;
