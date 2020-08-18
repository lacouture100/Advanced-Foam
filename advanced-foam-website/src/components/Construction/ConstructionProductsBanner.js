import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import './ConstructionProductsBanner.css';
import Card from '../Card';

import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

import SinglePost from '../SinglePost/SinglePost'


// class component
class ConstructionProductsBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: this.props.data
    }
  }



  render() {
    const { posts } = this.state;
    const mainRoute = '/Construction'
    console.log(posts)
    
    return (
      <div className="products-banner">
        <Fragment>
                    {/* Links */}

                    <div className="products-banner-content">
                        <h2 className="products-banner-title"> IN STOCK NOW</h2>
                        {posts.map((post, index) => {
                            return <Link to={`/Construction/${post.slug}`}>
                            <Card key={post.id} property={post}  />
                            </Link>;
                        })}
                    
                    </div>
                    {/* Routing */}
                     
                    
                </Fragment>
      </div>
    );
  }
}

ConstructionProductsBanner.propTypes = { posts : PropTypes.object.isRequired}

export default ConstructionProductsBanner;
