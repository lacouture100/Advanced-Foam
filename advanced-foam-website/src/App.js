import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/advanced_data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      //property: data.properties[0],
      studio: data.Studio[0],
      construction: data.Construction[0],
      packaging: data.Packaging[0],

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


        let newIndex = this.state.studio.index;
        let studioLength = data.Studio.length-1;

        if( this.state.studio.index !== (studioLength) ){
            newIndex += 1;
            console.log("Changing image");
        }else {
            console.log("Setting the first image");
            newIndex=1;
        }

        this.setState({
            studio: data.Studio[newIndex],
            construction: data.Construction[newIndex],
            packaging: data.Packaging[newIndex]
        })

        
      }, 3000);

      
        
}


/*


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
  */

  render() {
    const {appearHome, studio, packaging, construction} = this.state;
    return (
      <div className="App">


        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={studio}
                title={'Studio'} />
        </CSSTransition>

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={construction} 
                title={'Construction'} />
        </CSSTransition>

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={packaging} 
                title={'Packaging'} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
