
import Layout from '../components/layout';
import React from 'react';
import Link from 'next/link'

import '../../styles/Contact.css';

export default function Contact () {
    return (
      <div className="contact-main">
        <div className="contact-border"></div>
        <Link href={`/contact`}>
            <a href={`/contact`}>
        <img src="http://www.advancedfoam.com/wp-content/uploads/2020/09/contactUs.png"
             alt="Contact Us Button"
             className="contact-img"
             />
              </a>
            </Link>        
        <h3> CONTACT US TODAY</h3>
      </div>
    )
}
