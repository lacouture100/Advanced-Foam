
import React, { Component } from 'react';
import '../styles/Footer.css'

class Footer extends Component{
    static defaultProps = {
        footer_1A: 'Speak to us',
        footer_1B: 'Phone: (310) 515-0728',
        footer_1C: 'Fax: (310) 515-3548',

        footer_2A: 'Email us',
        footer_2B: 'info@advancedfoam.com',

        footer_3A: 'Headquarters',
        footer_3B: 'Gardena, California',
        footer_3C: '1745 W. 134th St.',
        footer_3D: 'Gardena, CA 90249',

        footer_RR: '© 2011 - 2020 Advanced Foam, Inc.'
    }
    render(){
        //When putting this.props only it assumes the name will be the name of the varaible given.
        //Its a shorthand
        const {footer_1A,
               footer_1B,
               footer_1C,
               footer_2A,
               footer_2B,
               footer_3A,
               footer_3B,
               footer_3C,
               footer_3D,
               footer_RR} = this.props;
        return (
            <div className="footer">
                <div className="footer-main">
                    <ul className="footer-titles">
                        <li className="footer-title">{footer_1A}</li>
                        <br></br>
                        <li className="footer-subtitle" >{footer_1B}</li>
                        <li className="footer-subtitle" >{footer_1C}</li>
                    </ul>
                    <ul className="footer-titles">
                        <li className="footer-title" ><a href="mailto:info@advancedfoam.com">{footer_2A}</a></li>
                        <br></br>
                        <li className="footer-subtitle"><a href="mailto:info@advancedfoam.com">{footer_2B}</a></li>
                    </ul>
                    <ul className="footer-titles">
                        <li className="footer-title">{footer_3A}</li>
                        <br></br>
                        <li className="footer-subtitle" >{footer_3B}</li>
                        <li className="footer-subtitle" >{footer_3C}</li>
                        <li className="footer-subtitle" >{footer_3D}</li>
                    </ul>
                </div>

                <li className="footer-rights" >{footer_RR}</li>
            </div>
        );
    }
}

export default Footer;


