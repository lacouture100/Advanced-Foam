import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            property : this.props.property
        }
    }
    
    componentDidUpdate(previousProps, previousState){
        if(previousProps.property !== this.props.property){
        this.setState({ 
            property : this.props.property
        }, () => {
          console.log(this.state.property, 'data in Card');
        }); 
        }else {
          return ;
        }
    
        
      }

    render(){
        const { property } = this.state;
        return(
            <div id={`card-${property.index}`} className="card">
            
       
            
            <div className="details">
                <h3 className="card-title">
                    {property.title.rendered}
                </h3>
                <div className="card-title-line"></div>
                <h4 className="card-subtitle">
                    {/*property.status*/}
                </h4>
            
            </div>
            
        </div>
        )
    }
        
}


export default withRouter(Card);