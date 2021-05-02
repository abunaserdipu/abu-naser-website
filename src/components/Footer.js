import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return(
        <section className="bg-secondary">
            <div className="container text-center">
            <div>
            <a href="#banner" className="p-2 fs-3"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#banner" className="p-2 fs-3"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="#banner" className="p-2 fs-3"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
            <small>All rights reserved by Abu Naser Dipu</small>
            </div>
        </section>
    )
}

export default Footer;