import React, { Component } from 'react';
import './CategoryBanner.css';
import Category from '../../Category';
import data from '../../../data/CategoryBanner_data'
import { CSSTransition } from "react-transition-group";

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
    }
  }


  componentDidMount(){
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
            packaging: data.Packaging.products[newIndex]
        })

        
      }, 5000);

      
       
}



  render() {
    const {appearCategory, studio, packaging, construction} = this.state;
    return (
      <div className="CategoryBanner">


        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={studio}
                    title={'STUDIO'} 
                    subtitle={'Television & Movie Set Studios'}/>
        </CSSTransition>

        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={construction} 
                    title={'CONSTRUCTION'} 
                    subtitle={'Architectural Decorations'}/>
        </CSSTransition>

        <CSSTransition
          in={appearCategory}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Category property={packaging} 
                    title={'PACKAGING'} 
                    subtitle={'Design & Fabrication'}/>
        </CSSTransition>
    
      </div>
    );
  }
}

export default CategoryBanner;
