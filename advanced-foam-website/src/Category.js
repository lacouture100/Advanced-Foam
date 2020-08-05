import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Category = ({property, title, subtitle}) => {

    return(
        <div className="category-container">
            <section>
                <button type="button" 
                        className="category-button">{title}</button>
                
                <div className="category-title-line"></div>
                <h3 className="category-subtitle">{subtitle}</h3>
            </section>
            <div>
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={300}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>
            </div>
        </div>   
    )
}
Category.propTypes = {
    property: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}

export default Category;