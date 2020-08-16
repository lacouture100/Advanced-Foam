import React, { Component,Fragment } from 'react';
import './StudioCategoryBanner.css';
import Card from '../Card';
import data from '../../data/main_data'
import SinglePost from '../SinglePost/SinglePost'
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';
import ExamplePage from '../App/ExamplePage'
// class component
class StudioCategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      property: data.Studio.productions,
      posts: this.props.data
    }
  }



  render() {
    const { posts } = this.state;
    const mainRoute = '/Studio'
    const productions = this.state.property.map((value)=>(
      <div >
        <Link className="navbar-title"
                   to={`${mainRoute}/${value.slug}`} >
        <Card key={value._id} property= {value}  />
        </Link>
      </div>
    ))
    
    return (
      <div className="studio-banner">
        <Fragment>
                    {/* Links */}
                    
                    <div className="topnav">
                        {posts.map((post, index) => {
                            return <Link to={post.slug}>{post.slug}
                            <Card key={post._id} property= {post}  />
                            </Link>;
                        })}
                    </div>

                    {/* Routing */}
                     
                    {posts.map((post, index) => {
                        return (
                            <Route
                                exact
                                key={index}
                                path={`/${post.slug}`}
                                render={props => (
                                    <ExamplePage {...props} post={post} />
                                )}
                            />
                        );
                    })}
                </Fragment>
      </div>
    );
  }
}

export default StudioCategoryBanner;
