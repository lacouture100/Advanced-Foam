import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, imgSrc} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={imgSrc} alt=" " />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    
                </p>
    
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;