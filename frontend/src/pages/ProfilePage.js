import { useAuth0 } from "@auth0/auth0-react";
import './profilePage.scss';
import NavBar from "../components/NavBar";

import { getUserProfile } from '../api/user';

const ProfilePage = () => {
    const tempUser = getUserProfile();
    return (
        (
            <div className="profilePage">
                 <NavBar />
                <div className="profile_container">
                    <div className="profile">
                        <div className="profile_left">
                            <div className="profile_left_pic" style={{ backgroundImage: `url(${tempUser.profilePic})` }}>
                            </div>
                            <div className="profile_left_text">
                                <div className="profile_left_text_row">Name: {tempUser.name}</div>
                                <div className="profile_left_text_row">Price: {tempUser.price}</div>
                                <div className="profile_left_text_row">Gender: {tempUser.gender}</div>
                                <div className="profile_left_text_row">Age: {tempUser.age}</div>





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
