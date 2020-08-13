import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,withRouter } from 'react-router-dom';
import ConstructionApp from './_Construction/ConstructionApp'
import MainApp from './_Main/MainApp'
import StudioApp from './_Studio/StudioApp'
import NavBar from './NavBar/NavBar2'


// class component
class App extends Component {
  render() {
    return (
          <div className="App">
            <NavBar />
            <Switch>
                <Route  path="/" exact strict  component={MainApp}/>
                <Route  path="/Construction" exact component={ConstructionApp}/>    
                <Route  path="/Studio" exact component={StudioApp}/> 
          </Switch>             
                            
          </div>
            
    );
  }
}

export default App;
