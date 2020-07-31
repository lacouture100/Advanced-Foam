
import React, { Component } from 'react';
import './HeroMain.css'

class SloganLogo extends Component{

    render(){

        return (
            <div className="main">
                <div className="main-slogan">
                     <h3 className="main-slogan-phrase"> We have over 35 years of experience in foam fabrication.</h3>
                     <h3 className="main-slogan-phrase"> We bring precision, innovation, creativity and economy.</h3>
                </div>
                <div className="main-logo">
                    <img  src="./img/logoStill.JPG"></img>
                    <div className="main-logo-dynamic"></div>
                </div>
            </div>
        );
    }
}

export default SloganLogo;


