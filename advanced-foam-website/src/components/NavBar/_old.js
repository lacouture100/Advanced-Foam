import React, {Component} from 'react';
import './NavBar.css'
import data from '../../data/main_data'


const links = ['Main','Studio','Construction','Packaging','Contact Us','About']

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc : data[this.props.property.name].logo.imgSrc,
            altText : data[this.props.property.name].logo.altText
        }
    }
    static defaultProps = {
        main : 'Main',
        studio: 'Studio',
        construction: 'Construction',
        packaging: 'Packaging',
        contactUs: 'Contact Us',
        about: 'About'
    }

    render() {
        const navLinks= links.filter(element => element !== this.props.property.name);
        const navList = navLinks.map((value,index)=>( 
            <div key={index} className="navbar-title-container">
                <li className="navbar-title">{value}</li>
            </div>
          ))



            let { imgSrc, altText } = this.state;
        return (
            <nav className="navbar">
                <img src={imgSrc} alt={altText} className="navbar-img"></img>
                <ul className="navbar-titles">
                    {navList}
                </ul>

            </nav>
        );
    }
}

export default NavBar;
