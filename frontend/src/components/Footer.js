import React from 'react'
import './cssComp/footer.scss';
import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
                            <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>

                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>

                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
