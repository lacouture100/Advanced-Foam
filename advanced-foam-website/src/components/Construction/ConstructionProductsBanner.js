import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import './ConstructionProductsBanner.css';
import Card from '../Card';

import {BrowserRouter as Link} from 'react-router-dom';

// class component
class ConstructionProductsBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.data
        }
    }

    render() {
        const {posts} = this.state;
        const mainRoute = '/Studio'

        return (
            <div className="products-banner">
                <h2 className="products-banner-title">
                    IN STOCK NOW!</h2>
                <div className="products-banner-content">
                    <Fragment>
                        {/* Links */}

                        {posts.map((post, index) => {
                            return <Link to={`${post.slug}`}>
                                <Card key={post.id} property={post}/>
                            </Link>;
                        })}

                        {/* Routing */}

                    </Fragment>

                </div>

            </div>
        );
    }
}

ConstructionProductsBanner.propTypes = {
    posts: PropTypes.object.isRequired
}

export default ConstructionProductsBanner;
