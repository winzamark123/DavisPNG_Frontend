import React from 'react'
import './css/landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import barCam from '../assets/landingPage_assets/barCam.svg';
import workingCow from '../assets/landingPage_assets/workingCow.svg';
import { emailSignUp } from '../api/emailSignupAPI';
import { useState } from 'react';

const LandingPage = () => {
    const [buttonClass, setButtonClass] = useState("");
    const [email, setEmail] = useState("");

    function handleSendEmail(event) {
        event.preventDefault();

        if (email === "") {
            // alert("Please enter a valid email address");

            // Use setTimeout to reapply the class, ensuring the browser recognizes it as a new animation
            setTimeout(() => {
                setButtonClass("errorBTN-animation");

                // Automatically remove the class after the animation duration (500ms)
                setTimeout(() => setButtonClass(""), 500);
            }, 10); // Short delay before reapplying the class

            // Reset email state to clear the input field
            setEmail("");
            return;
        }

        const userEmail = {
            email: email
        };

        const jsonData = JSON.stringify(userEmail);
        console.log(jsonData);

        emailSignUp(jsonData);

        // Reset email state to clear the input field
        setEmail("");

    }

    return (
        <div className="landing">
            <div className="landing_background">
                <div className="landing_background_bottom">
                    <div className="landing_background_top">

                    </div>
                </div>
            </div>
            <div className="landing_c2ontent">
                <div className="landing_content_form">
                    <div className="landing_content_form_title">
                        <span >UC Davis</span>
                        <span>Photographer Platform</span>
                    </div>
                    <div className="landing_content_form_body">
                        <span id="ComingSoon">Website Coming Soon <span style={{ color: "#B1D1C6", fontWeight: 600 }}>This Winter 2023!</span></span>
                        <div className="landing_content_form_body_getNotification">
                            <span className="landing_content_form_body_getNoti">Get <span style={{ color: "$pop-gold" }}>Notified</span></span>
                            <span id="Launch">When We Launch</span>
                        </div>
                        <span id="spam">*Dont Worry we promise we won't spam :3</span>

                        <form>
                            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button
                                type="submit"
                                onClick={handleSendEmail}
                                className={buttonClass}
                            >
                                <span>Notify Me</span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="landing_content_workingCow" style={{ backgroundImage: `url(${workingCow})` }}></div>

                <div className="landing_content_loadBar">
                    <div className="landing_content_loadBar_loader"></div>
                    <div className="landing_content_loadBar_barCam" style={{ backgroundImage: `url(${barCam})` }}></div>
                </div>


            </div>

        </div>
    )
}

export default LandingPage
