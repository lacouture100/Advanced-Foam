import  React, {Component } from 'react';
import PropTypes from 'prop-types';
import Card from './MainCard';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router,Link,NavLink,withRouter } from 'react-router-dom';


//this props.property = data object

class Category extends Component {

    constructor(props){
        super(props);
        this.state={
            property : this.props.property,
            title: this.props.title,
            subtitle: this.props.subtitle,
            link: this.props.link
        }
        this.goToPost = this.goToPost.bind(this);

    }

    goToPost(){
        this.props.history.push(this.state.link);
    }

    render(){

        const { property,title,subtitle,link } = this.props;
        return(
            <div className="category-container">
                <section>
                    <button type="button"
                    onClick={this.goToPost}  
                            className="category-button">{title}</button>
                
                    <div className="category-title-line"></div>
                    <h3 className="category-subtitle">{subtitle}</h3>
                </section>
            
                    <Card property={property}
                          link={link} /> 
            </div>   
        )
    }
}
Category.propTypes = {
    property: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default withRouter(Category);