import { useAuth0 } from "@auth0/auth0-react";
import './aboutUsPage.scss';

import tempUser from '../api/user';

const AboutUsPage = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        (
            <div className="aboutUs">
               Temp About US PAGE
            </div>
        )
    )
}

export default AboutUsPage;


//js + html 