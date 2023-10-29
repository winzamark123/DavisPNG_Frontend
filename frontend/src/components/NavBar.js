import { useAuth0, getTokenSilently } from '@auth0/auth0-react';
import './NavBar.scss';
import LoginBTN from './LoginBTN';
import LogoutBTN from './LogoutBTN';
import { useEffect } from 'react';

const NavBar = () => {
    const { user, isAuthenticated, getTokenSilently } = useAuth0();

    const fetchTokenAndUserID = async () => {
        if (isAuthenticated) {
            try {
                const token = await getTokenSilently();
                const userID = user.sub.split('|')[1]; // extracting the userID from "auth0|USER_ID"

                console.log("JWT Token:", token);
                console.log("User ID:", userID);
            } catch (error) {
                console.error("Error fetching the token:", error);
            }

        } else {
            console.log("User is not authenticated");
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchTokenAndUserID();
        }
    }, [isAuthenticated]);

    return (
        isAuthenticated ? (
            <div className="nav_main_container">
                <ul className="nav_items">
                    <li className="nav_items_item">
                        <a href="/photographers">PHOTOGRAPHERS</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="/aboutus">ABOUT US</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="/profile">PROFILE</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="/settings">SETTINGS</a>
                    </li>
                    <li className="nav_items_item">
                        <LogoutBTN />
                        {/* <LoginBTN /> */}
                    </li>
                </ul>
            </div>
        ) : ( //User NOT LOGGEDIN
            <div className="nav_main_container">
                <ul className="nav_items">
                    <li className="nav_items_item">
                        <a href="/photographers">PHOTOGRAPHERS</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="/aboutus">ABOUT US</a>
                    </li>
                    <li className="nav_items_item">
                        <LoginBTN />
                    </li>
                </ul>
            </div>
        )

    )
}

export default NavBar;