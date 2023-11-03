import { useAuth0 } from "@auth0/auth0-react";
import './css/aboutUsPage.scss';
import NavBar from "../components/NavBar";
import tempUser from '../api/user';
import logo from '../logo.svg'

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

                <div className="aboutUs_section1">
                    <div className="aboutUs_section1_coverBG"></div>
                    <div className="aboutUs_section1_title"
                        style={{ backgroundImage: `url(${svgImages['DavisPNGTitle.svg']})` }}
                    ></div>
                    <div className="aboutUs_section1_caption">
                        <span style={{ fontFamily: "Gluten" }}>"Every Shot is a memory."</span>
                    </div>
                    <div className="aboutUs_section1_collage">

                    </div>
                </div>
                <div className="aboutUs_topRightCloud"
                    style={{ backgroundImage: `url(${svgImages['topRightCloud.svg']})` }}
                ></div>

                <div className="aboutUs_section2">
                    <div className="aboutUs_section2_hollowCloud"
                        style={{ backgroundImage: `url(${svgImages['hollowCloud.svg']})` }}
                    ></div>
                    <div className="aboutUs_section2_topLeftCloud"
                        style={{ backgroundImage: `url(${svgImages['topLeftCloud.svg']})` }}
                    ></div>
                    <div className="aboutUs_section2_smallCloud"
                        style={{ backgroundImage: `url(${svgImages['smallCloud.svg']})` }}
                    ></div>

                    <div className="aboutUs_section2_topCenterCloud"
                        style={{ backgroundImage: `url(${svgImages['topCenterCloud.svg']})` }}
                    ></div>

                    <div className="aboutUs_section2_bottomRightCloud"
                        style={{ backgroundImage: `url(${svgImages['bottomRightCloud.svg']})` }}
                    ></div>
                    <div className="aboutUs_section2_backgroundCloud"
                        style={{ backgroundImage: `url(${svgImages['backgroundCloud.svg']})` }}
                    ></div>
                    <div className="aboutUs_section2_cowCloud"
                        style={{ backgroundImage: `url(${svgImages['cowCloud.svg']})` }}
                    ></div>

                    <div className="aboutUs_section2_Cow"
                        style={{ backgroundImage: `url(${svgImages['Cow.svg']})` }}
                    ></div>
                </div>
                <div className="aboutUs_section3"></div>
            </div >
        )
    )
}

export default AboutUsPage;


//js + html 