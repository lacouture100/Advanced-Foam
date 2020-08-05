
import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component{
    static defaultProps = {
        footer_1A: 'Speak to us',
        footer_1B: 'Phone: (310) 515-0728',
        footer_1C: 'Fax: (310) 515-3548',
        footer_2A: 'Email us',
        footer_2B: 'info@advancedfoam.com',
        footer_3A: 'Headquarters',
        footer_3B: 'Gardena, California',
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
               footer_RR} = this.props;
        return (
            <div className="footer">
                <div className="footer-main">
                    <ul className="footer-titles">
                        <li className="footer-title">{footer_1A}</li>
                        <li className="footer-subtitle" >{footer_1B}</li>
                        <li className="footer-subtitle" >{footer_1C}</li>
                    </ul>
                    <ul className="footer-titles">
                        <li className="footer-title">{footer_2A}</li>
                        <li className="footer-subtitle" >{footer_2B}</li>
                    </ul>
                    <ul className="footer-titles">
                        <li className="footer-title">{footer_3A}</li>
                        <li className="footer-subtitle" >{footer_3B}</li>
                    </ul>
                </div>

                <li className="footer-rights" >{footer_RR}</li>
            </div>
        );
    }
}

export default Footer;


