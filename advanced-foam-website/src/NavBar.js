
import React, { Component } from 'react';
import './NavBar.css'

const LOGO = `./img/logos/advancedFoam_logo.png`;

class NavBar extends Component{
    static defaultProps = {
        mainTitle: 'Advanced Foam',
        studio: 'Studio',
        construction: 'Construction',
        packaging: 'Packaging',
        contactUs: 'Contact Us',
        about: 'About'
    }
    render(){
        //When putting this.props only it assumes the name will be the name of the varaible given.
        //Its a shorthand
        const {mainTitle, studio, construction,packaging, about, contactUs} = this.props;
        return (
            <nav className="navbar">
                <img src={LOGO} alt={mainTitle} className="navbar-img"></img>
                <ul className="navbar-titles">
                    <div className="navbar-title-container"><li className="navbar-title">{studio}</li></div>
                    <div className="navbar-title-container"><li className="navbar-title" >{construction}</li></div>
                    <div className="navbar-title-container"><li className="navbar-title" >{packaging}</li></div>
                    <div className="navbar-title-container"><li className="navbar-title">{contactUs}</li></div>
                    <div className="navbar-title-container"><li className="navbar-title">{about}</li></div>
                </ul>

            </nav>
        );
    }
}

export default NavBar;


