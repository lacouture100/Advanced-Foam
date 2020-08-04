import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Category = ({property, title}) => {

    return(
        <div className="category-container">
            <section>
                <h2 className="card-title">{title}</h2>
            </section>
            <div>
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
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