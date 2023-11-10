import React from 'react'
import './css/landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import barCam from '../assets/landingPage_assets/barCam.svg';
import workingCow from '../assets/landingPage_assets/workingCow.svg';
import { emailSignUp } from '../api/user';
import { useState } from 'react';

const LandingPage = () => {
    const [email, setEmail] = useState("");

    function handleSendEmail(event) {
        event.preventDefault();

        if (email === "") {
            alert("Please enter a valid email address");
            return;
        }

        const userEmail = {
            email: email
        };

        const jsonData = JSON.stringify(userEmail);
        console.log(jsonData);

        emailSignUp(jsonData);
    }

    return (
        <div className="landing">
            <div className="landing_background">
                <div className="landing_background_bottom">
                    <div className="landing_background_top">

                    </div>
                </div>
            </div>
            <div className="landing_content">
                <div className="landing_content_form">
                    <div className="landing_content_form_title">
                        <span >UC Davis Photographer Platform</span>
                    </div>
                    <div className="landing_content_form_body">
                        <span id="ComingSoon">Website Coming Soon <span style={{ color: "#B1D1C6", fontWeight: 600 }}>This Winter Graduation!</span></span>
                        <span className="landing_content_form_body_getNoti">Get <span style={{ color: "$pop-gold" }}>Notified</span></span>
                        <span id="Launch">When We Launch</span>
                        <span id="spam">Dont Worry we promise we won't spam :3</span>

                        <form>
                            <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit" onClick={handleSendEmail}>
                                <span>Notify Me</span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="landing_content_loadBar">
                    <div className="landing_content_loadBar_loader"></div>
                    <div className="landing_content_loadBar_barCam" style={{ backgroundImage: `url(${barCam})` }}></div>
                </div>
                <div className="landing_content_workingCow" style={{ backgroundImage: `url(${workingCow})` }}></div>

            </div>

        </div>
    )
}

export default LandingPage
