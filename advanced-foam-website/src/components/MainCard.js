import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Link,Route,withRouter } from 'react-router-dom';

const Card = ({ property }) => (

        <div id={`card-${property.index}`} className="card">
            <img src={property.imgSrc} 
                 alt=" " 
                 className="card-image" />
                 
            <div className="details">
                <h3 className="card-title">
                    {property.title}
                </h3>
                <div className="card-title-line"></div>
                <h4 className="card-subtitle">
                    {property.production}
                </h4>
            
            </div>
        </div>

        
    
)

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default withRouter(Card);