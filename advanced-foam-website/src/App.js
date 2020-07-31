import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {appearHome, property} = this.state;
    return (
      <div className="App">

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={property} />
        </CSSTransition>

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={property} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
