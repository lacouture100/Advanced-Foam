import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import data from './data/advanced_data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearCategory: true,
      //property: data.properties[0],
      studio: data.Studio[0],
      construction: data.Construction[0],
      packaging: data.Packaging[0],

    }
  }


  componentDidMount(){


    setInterval(() => {

        let newIndex = this.state.studio.index;
        let studioLength = data.Studio.length-1;

        if( this.state.studio.index !== (studioLength) ){
            newIndex += 1;
        }else {
            newIndex=0;
        }

        this.setState({
            studio: data.Studio[newIndex],
            construction: data.Construction[newIndex],
            packaging: data.Packaging[newIndex]
        })

        
      }, 3000);

      
        
}

  render() {
    const {appearCategory, studio, packaging, construction} = this.state;
    return (
      <div className="App">


        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={studio}
                title={'Studio'} />
        </CSSTransition>

        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={construction} 
                title={'Construction'} />
        </CSSTransition>

        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={packaging} 
                title={'Packaging'} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
