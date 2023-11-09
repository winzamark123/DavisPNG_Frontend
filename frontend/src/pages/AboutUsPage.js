import { useAuth0 } from "@auth0/auth0-react";
import './css/aboutUsPage.scss';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import tempUser from '../api/user';
import logo from '../logo.svg';
import LandingPage from "./LandingPage";


function importAllSVGs(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
        return true;
    });
    return images;
}

const svgImages = importAllSVGs(require.context('../assets/aboutUs_assets', false, /\.svg$/));
const AboutUsPage = () => {

    return (
        (
            <div className="aboutUs">
                <NavBar />
                <div className="aboutUs_section1_background">
                    <div className="aboutUs_section1">
                        <div className="aboutUs_section1_coverBG"></div>
                        <div className="aboutUs_section1_title"
                            style={{ backgroundImage: `url(${svgImages['DavisPNGTitle.svg']})` }}
                        ></div>
                        <div className="aboutUs_section1_caption">
                            <span style={{ fontFamily: "Mada" }}>Every Shot is a memory.</span>
                        </div>
                        <div className="aboutUs_section1_collage">

                        </div>
                    </div>
                </div>

                <div className="aboutUs_topRightCloud"
                    style={{ backgroundImage: `url(${svgImages['topRightCloud.svg']})` }}
                ></div>
                <div className="aboutUs_topLeftCloud"
                    style={{ backgroundImage: `url(${svgImages['topLeftCloud.svg']})` }}
                ></div>
                <div className="aboutUs_backgroundCloud"
                    style={{ backgroundImage: `url(${svgImages['backgroundCloud.svg']})` }}
                ></div>
                <div className="aboutUs_cowCloud"
                    style={{ backgroundImage: `url(${svgImages['cowCloud.svg']})` }}
                ></div>
                <div className="aboutUs_topCenterCloud"
                    style={{ backgroundImage: `url(${svgImages['topCenterCloud.svg']})` }}
                ></div>
            

                <div className="aboutUs_section2_background">
                    <div className="aboutUs_section2">
                        <div className="aboutUs_section2_Cow2"
                            style={{ backgroundImage: `url(${svgImages['Cow2.svg']})` }}
                        ></div>
                        <div className="aboutUs_section2_text">
                            <div className="aboutUs_section2_text_title">
                                <span style={{ fontFamily: "Mada", fontWeight: 700 }}>About Us</span>
                            </div>
                            <div className="aboutUs_section2_text_info">
                                <span style={{ fontFamily: "Mada", fontWeight: 500 }}>We are a group of students from UC Davis who are passionate about photography. We started this project to help people find the perfect photographer for their special events. We hope that our website can help you find the photographer that you are looking for!</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="aboutUs_section3_background">
                    <div className="aboutUs_section3">
                        <div className="aboutUs_section3_title">
                            <span style={{ fontFamily: "Mada", fontWeight: 700 }}>CAPTURE YOUR MOMENT</span>
                        </div>
                        <div className="aboutUs_section3_info">
                            <div className="aboutUs_section3_info_left">
                                <div className="aboutUs_section3_info_left_img"
                                    style={{ backgroundImage: `url(${svgImages['cowAndCam.svg']})` }}>
                                </div>
                                <span>Find your photographer.</span>
                            </div>
                            <div className="aboutUs_section3_info_mid">
                                <div className="aboutUs_section3_info_mid_img"
                                    style={{ backgroundImage: `url(${svgImages['cowChat.svg']})` }}>
                                </div>
                                <span>Create an account to chat with our photographers</span>
                            </div>
                            <div className="aboutUs_section3_info_right">
                                <div className="aboutUs_section3_info_right_img"
                                    style={{ backgroundImage: `url(${svgImages['book.svg']})` }}
                                ></div>
                                <span>Make your bookings.</span>
                            </div>

                        </div>
                        <div className="aboutUs_section3_button">
                            <span>Get Started</span>
                        </div>
                    </div>
                </div>
                <div className="aboutUs_section4">

                </div>
                {/* <LandingPage /> */}
                <Footer />
            </div >

        )
    )
}

export default AboutUsPage;


//js + html 