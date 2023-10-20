import { useAuth0 } from "@auth0/auth0-react";
import './profilePage.scss';

import { getUserProfile } from '../api/user';

const ProfilePage = () => {
    const { user, isAuthenticated } = useAuth0();
    const tempUser = getUserProfile();
    return (
        (
            <div className="profilePage">
                <div className="profile_container">
                    <div className="profile">
                        <div className="profile_left">
                            <div className="profile_left_pic" style={{ backgroundImage: `url(${tempUser.profilePic})` }}>
                            </div>
                            <div className="profile_left_text">
                                {tempUser.name}
                                {tempUser.email}
                                {tempUser.age}
                                {tempUser.price}
                            </div>
                        </div>
                        <div className="profile_right">
                            <div className="profile_right_descrip">
                                {tempUser.profileDescrip}
                            </div>
                        </div>

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
