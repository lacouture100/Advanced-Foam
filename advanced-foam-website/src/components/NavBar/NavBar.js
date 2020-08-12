import React, {Component} from 'react';
import './NavBar.css'
import data from '../../data/CategoryBanner_data'

const LOGO = `./img/logos/advancedFoam_studio.png`;


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc : data[this.props.property.name].logo.imgSrc
        }
    }
    static defaultProps = {
        studio: 'Studio',
        construction: 'Construction',
        packaging: 'Packaging',
        contactUs: 'Contact Us',
        about: 'About'
    }

    render() {
        
        const {
            mainTitle,
            studio,
            construction,
            packaging,
            about,
            contactUs
        } = this.props;

            let { imgSrc } = this.state;
        return (
            <nav className="navbar">
                <img src={imgSrc} alt={mainTitle} className="navbar-img"></img>
                <ul className="navbar-titles">
                    <div className="navbar-title-container">
                        <li className="navbar-title">{studio}</li>
                    </div>
                    <div className="navbar-title-container">
                        <li className="navbar-title">{construction}</li>
                    </div>
                    <div className="navbar-title-container">
                        <li className="navbar-title">{packaging}</li>
                    </div>
                    <div className="navbar-title-container">
                        <li className="navbar-title">{contactUs}</li>
                    </div>
                    <div className="navbar-title-container">
                        <li className="navbar-title">{about}</li>
                    </div>
                </ul>

            </nav>
        );
    }
}

export default NavBar;
