import React, { Component } from 'react';


export default  ({ property }) => (

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

