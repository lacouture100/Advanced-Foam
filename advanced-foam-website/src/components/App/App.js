import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom';
import ConstructionApp from '../Construction/ConstructionApp'
import MainApp from '../Main/MainApp'
import StudioApp from '../Studio/StudioApp'
import NavBar from '../NavBar/NavBar'
import ExamplePage from './ExamplePage'
import SinglePost from '../SinglePost/SinglePost'


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

    const { constructionPosts, studioPosts, packagingPosts } = this.state;
    const parent='Studio'
    return (
          <div className="App">
          <NavBar />
          <Switch>
            
                
                <Route  path="/" exact  render={(props) => <MainApp {...props} />}/>  
                <Route  path="/Construction" exact render={(props) => <ConstructionApp {...props}  data={constructionPosts}/>}/>    
                <Route  path="/Studio" exact  render={(props) => <StudioApp {...props} data={studioPosts} />}/> 

                <Fragment>
                    

                    {/* Routing */}

                    {constructionPosts.map((post, index) => {
                        return (
                            <Route
                                exact
                                key={index}
                                path={`/Construction/${post.slug}`}
                                render={props => (
                                    <SinglePost {...props} post={post} />
                                )}
                            />
                        );
                    })}

                     
                    {studioPosts.map((post, index) => {
                        return (
                            <Route
                                exact
                                key={index}
                                path={`/Studio/${post.slug}`}
                                render={props => (
                                    <SinglePost {...props} post={post} />
                                )}
                            />
                        );
                    })}
                </Fragment> 
                </Switch>
      
    
          </div>
            
    );
  }
}

export default App;

