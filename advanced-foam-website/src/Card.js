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
                <h3 className="card-subtitle">
                    {production}
                </h3>
                <span className="index">
                    {index+1}
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;