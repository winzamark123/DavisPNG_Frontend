import { useAuth0 } from "@auth0/auth0-react";
import './profilePage.scss';

import tempUser from '../api/user';

const ProfilePage = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        (
            <div className="profilePage">
                <div className="profile_container">
                    <div className="profile">
                        <div className="profile_pic"></div>
                        <div className="profile_descrip"></div>
                        <div className="profile_text"></div>
                    </div>
                </div>
                <div className="portfolio_container">
                    <div className="portfolio">

                    </div>
                </div>
            </div>
        )
    )
}

export default ProfilePage;
