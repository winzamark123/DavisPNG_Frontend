import React from 'react'
import './css/landingPage.scss';

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
                <div className="landing_content_title">
                    <span>UC Davis Photographer Platform</span>
                </div>
            </div>

        </div>
    )
}

export default LandingPage
