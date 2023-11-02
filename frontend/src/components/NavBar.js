import { useAuth0, getTokenSilently } from '@auth0/auth0-react';
import './NavBar.scss';
// import LoginBTN from './LoginBTN';
// import LogoutBTN from './LogoutBTN';
import AuthBTN from './AuthBTN';
import { useEffect } from 'react';

const NavBar = () => {
    const { user, isAuthenticated, getTokenSilently } = useAuth0();

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
                        <AuthBTN />
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
                        <AuthBTN />
                    </li>
                </ul>
            </div>
        )

    )
}

export default NavBar;