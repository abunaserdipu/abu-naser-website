import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return(
        <section className="bg-secondary">
            <div className="container text-center">
            <div>
            <a href="https://www.facebook.com/abu.naserdipu/" target="_blank" rel="noreferrer" className="p-2 fs-3"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://twitter.com/NaserDipu" target="_blank" rel="noreferrer" className="p-2 fs-3"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://www.linkedin.com/in/abu-naser-dipu-6b173b1a0/" target="_blank" rel="noreferrer" className="p-2 fs-3"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            <small>All rights reserved by Abu Naser Dipu</small>
            </div>
        </section>
    )
}

export default Footer;