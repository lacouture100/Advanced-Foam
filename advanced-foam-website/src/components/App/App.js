import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,withRouter } from 'react-router-dom';
import ConstructionApp from '../Construction/ConstructionApp'
import MainApp from '../Main/MainApp'
import StudioApp from '../Studio/StudioApp'
import NavBar from '../NavBar/NavBar'
import SinglePost from '../SinglePost/SinglePost'
import * as apiCall from '../API_wordpress';




// class component
class App extends Component {
  render() {

    // The <Router> tag is created in index.js, the Switch is a parent to the <Routes> and inside the Navbar we can see the <NavLinks>
    return (
          <div className="App">
            <NavBar />
                <Route  path="/" exact strict  component={MainApp}/>
                <Route  path="/Construction" exact component={ConstructionApp}/>    
                <Route  path="/Studio" exact component={StudioApp}/>      
                
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