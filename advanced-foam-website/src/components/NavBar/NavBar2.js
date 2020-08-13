import React, {Component} from 'react';
import './NavBar.css'
import data from '../../data/main_data'
import { BrowserRouter as Router,Link,NavLink } from 'react-router-dom';


const links = ['Main','Studio','Construction','Packaging','Contact Us','About']

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //imgSrc : data[this.props.property.name].logo.imgSrc,
           // altText : data[this.props.property.name].logo.altText
        }
    }

    render() {
        const active = { 
            textDecoration : 'none', 
            cursor : 'default'
          };
          const defaultStyle = {
            margin: '5px',
            color: 'black'
            
        
          }
        //const navLinks= links.filter(element => element !== this.props.property.name);
        /*const navList = links.map((value,index)=>( 
            <NavLink style={defaultStyle} activeStyle={active} key={index} 
                   className="navbar-title"
                   to={`/${value}`}>{value}
            </NavLink>
          ))*/

            let { imgSrc, altText } = this.state;
        return (
            <div className="navbar">
                <img src={data["Main"].logo.imgSrc} alt={""} className="navbar-img"></img>
                <div className="navbar-title-container">
                

                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/`}>Main
                </NavLink>
                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/${links[1]}`}>{links[1]}
                </NavLink>
                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/${links[2]}`}>{links[2]}
                </NavLink>
                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/${links[3]}`}>{links[3]}
                </NavLink>
                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/${links[4]}`}>{links[4]}
                </NavLink>
                <NavLink exact style={defaultStyle} activeStyle={active} 
                   className="navbar-title"
                   to={`/${links[5]}`}>{links[5]}
                </NavLink>
                
                </div>
            </div>
        );
    }
}

export default NavBar;
