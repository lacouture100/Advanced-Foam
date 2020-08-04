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


  componentDidMount(){


    setInterval(() => {
        //console.log(this.state.data);
        //console.log(Object.keys(this.state.data).length)
        /*// Cycle through every title in our data

        Object.keys(this.state.data).forEach((value,index,array)=>{
            // array is the array of categories
            console.log(`These are our array of categories: ${array}`)
            var arrayLength = array.length;
            for (var i = 0; i < arrayLength; i++) {
                // This is the array of categories inside our data
                //console.log(data[`${array[i]}`])
                const innerArrayLength = data[`${array[i]}`].length;
                // Print the title for each of our elements in each category array
                for(var j=0; j < innerArrayLength; j++){
                    console.log(data[`${array[i]}`][j]._id);
                }
            }
        })*/
//console.log(this.state.studioProperty.index);
        //console.log((data.Studio.length - 1));


        let newIndex = this.state.property.index;
        let studioLength = data.properties.length-1;

        if( this.state.property.index !== (studioLength) ){
            newIndex += 1;
            console.log("Changing image");
        }else {
            console.log("Setting the first image");
            newIndex=1;
        }

        this.setState({
            property: data.properties[newIndex]

        })

        
      }, 3000);

      
        
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
        <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>

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
