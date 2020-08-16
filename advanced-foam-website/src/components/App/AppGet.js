import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom';
import ConstructionApp from '../Construction/ConstructionApp'
import MainApp from '../Main/MainApp'
import StudioApp from '../Studio/StudioApp'
import NavBar from '../NavBar/NavBar'
import ExamplePage from './ExamplePage'

import axios from 'axios'

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const studioUrl = "http://studio.advancedfoam.com/wp-json/wp/v2/posts";
const constructionUrl = "http://construction.advancedfoam.com/wp-json/wp/v2/posts";
const packagingUrl = "http://packaging.advancedfoam.com/wp-json/wp/v2/posts";

// class component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        posts: [],
        studioPosts : [],
        constructionPosts : [],
        packagingPosts : []
      };
    }

    getAllPosts = async () => {
     
      const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
        axios.get(studioUrl),
        axios.get(constructionUrl),
        axios.get(packagingUrl)
        
      ]);
      this.setState({ 
        studioPosts : firstResponse.data,
        constructionPosts : secondResponse.data,
        packagingPosts : thirdResponse.data
      });
      
    };
    // TODO Change so that it loads after the page loads.
    componentDidMount = async () => {
      await this.getAllPosts();
    };


  render() {

    const { constructionPosts, studioPosts,packaging } = this.state;

    return (
          <div className="App">
          <NavBar />
 
            <Fragment>
                    {/* Links */}
                    <div className="topnav">
                        {constructionPosts.map((post, index) => {
                            return <Link to={post.slug}>{post.slug}</Link>;
                        })}
                    </div>

                    {/* Routing */}
                     
                    {constructionPosts.map((post, index) => {
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
                <Route  path="/" exact  render={(props) => <MainApp {...props} />}/>  
                <Route  path="/Construction" exact component={ConstructionApp}/>    
                <Route  path="/Studio" exact  render={(props) => <StudioApp {...props} data={studioPosts} />}/>  
         
      
    
          </div>
            
    );
  }
}

export default App;


/*
<Switch>

{pageList.map( (page, i) => {
  let Template = identifyComponent(page)
  let pageID = page.id;
  let parent = page.parent;
  return(
    <Route
      key={pageID}
      path={`${parent ? '/'+parent :''}/${page.slug}`}
      render={(props) => <Template pageID={pageID} siteURL={siteURL} {...props} />}
      exact
    />
   )
  })}
 <Route component={NotFound} />
</Switch>
</div>

*/

/*
<Switch>

{
  let postList = apiCalls.getPosts('studio.advancedfoam.com/wp-json/wp/v2/posts')
  
  postList.map( (post, i) => {
  let Template = identifyComponent(page)
  let postID = post.id;
  
  return(
    <Route
      key={postID}
      path={`/Studio/${page.slug}`}
      render={(props) => <SinglePost postID={pageID} siteURL={siteURL} {...props} />}
      exact
    />
   )
  })}
 
</Switch>
</div>

*/