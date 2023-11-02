import { useAuth0 } from "@auth0/auth0-react";
import './css/aboutUsPage.scss';
import NavBar from "../components/NavBar";
import tempUser from '../api/user';
import hollowCloud from '../assets/aboutUs_assets/clouds copy_page-0016-modified 1.svg'
import cloud from '../assets/aboutUs_assets/clouds copy_page-0016-modified 1.svg'
import logo from '../logo.svg'

const AboutUsPage = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        (
            <div className="aboutUs">
                {/* <NavBar /> */}
                Temp About US PAGE

                <div className="aboutUs_section1">
                    <div className="aboutUs_section1_hollowCloud"
                        style={{ backgroundImage: `url(${cloud})` }}
                    ></div>

                </div>
                <div className="aboutUs_section2"></div>
                <div className="aboutUs_section3"></div>
            </div>
        )
    )
}

export default AboutUsPage;


//js + html 