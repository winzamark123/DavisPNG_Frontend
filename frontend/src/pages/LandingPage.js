import React from 'react'
import './css/landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import barCam from '../assets/landingPage_assets/barCam.svg';
import workingCow from '../assets/landingPage_assets/workingCow.svg';

const LandingPage = () => {
    return (
        <div className="landing">
            <div className="landing_background">
                {/* This is a weird part dealing with front-back and top-bottom */}
                {/* Front is Top, Back is Bottom */}
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
                            <input type="text" placeholder="Email Address" />
                            <button type="submit">
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
