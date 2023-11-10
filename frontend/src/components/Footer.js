import React from 'react'
import './cssComp/footer.scss';
import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="footer_content_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_content_body">
                    <span>Made by Students @ UCDavis</span>
                    <span> © DAVISPNG 2024 </span>
                </div>
                <div className="footer_content_contact">
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
