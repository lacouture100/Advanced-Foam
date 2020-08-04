
import React, { Component } from 'react';
import './NavBar.css'

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
                <img src={`./img/mainLogo.png`} alt={mainTitle}></img>
                <ul className="navbar-titles">
                    <li className="navbar-title">{studio}</li>
                    <li className="navbar-title" >{construction}</li>

                    <li className="navbar-title" >{packaging}</li>
                    <li className="navbar-title">{contactUs}</li>
                    <li className="navbar-title">{about}</li>
                </ul>

            </nav>
        );
    }
}

export default NavBar;


