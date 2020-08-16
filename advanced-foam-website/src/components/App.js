import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,withRouter } from 'react-router-dom';
import ConstructionApp from './_Construction/ConstructionApp'
import MainApp from './_Main/MainApp'
import StudioApp from './_Studio/StudioApp'
import NavBar from './NavBar/NavBar'
import SinglePost from './SinglePost/SinglePost'
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

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