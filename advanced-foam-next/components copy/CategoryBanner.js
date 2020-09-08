import React, { Component } from 'react';
import '../styles/CategoryBanner.css';
import Category from './Category';
import data from '../data/main_data'
//import { CSSTransition } from "react-transition-group";

// class component
class CategoryBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearCategory: true,
      //property: data.properties[0],
      studio: data.Studio.productions[0],
      construction: data.Construction.projects[0],
      packaging: data.Packaging.products[0],
      studioData: [],
    }
  }

  componentDidUpdate(previousProps, previousState){
    if(previousProps.studioData !== this.props.studioData){
    this.setState({ 
      studioData : this.props.studioData
    }, () => {
      console.log(this.state.studioData, 'data in Category Banner');
    }); 
    }else {
      return ;
    }
    setInterval(() => {

      let newIndex = this.state.studio.index;
      let studioLength = 2;

      if( this.state.studio.index !== (studioLength) ){
          newIndex += 1;
      }else {
          newIndex=0;
      }

      this.setState({
          studio: data.Studio.productions[newIndex],
          construction: data.Construction.projects[newIndex],
          packaging: data.Packaging.products[newIndex],
      })
    }, 5000);

    
  }
  componentDidMount(){
    
}

  render() {
    const {appearCategory, studio, packaging, construction} = this.state;
    
    return (
      <div className="CategoryBanner">


          <Category property={studio}
                    title={'STUDIO'} 
                    subtitle={'Television & Movie Set Studios'}
                    link={"/studio"}
                    />


          <Category property={construction} 
                    title={'CONSTRUCTION'} 
                    subtitle={'Architectural Decorations'}
                    link={"/construction"}
                    />



          <Category property={packaging} 
                    title={'PACKAGING'} 
                    subtitle={'Design & Fabrication'}
                    link={"/packaging"}
                    />


      </div>
    );
  }
}

export default CategoryBanner;
