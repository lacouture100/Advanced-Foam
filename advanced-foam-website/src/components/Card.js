import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, imgSrc, title, production } = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={imgSrc} 
                 alt=" " 
                 className="card-image" />
                 
            <div className="details">
                <h3 className="card-title">
                    {title}
                </h3>
                <div className="card-title-line"></div>
                <h4 className="card-subtitle">
                    {production}
                </h4>
            
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;