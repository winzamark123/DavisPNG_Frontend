import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.scss';
import LoginBTN from './LoginBTN';
import AboutUs from '../pages/AboutUs';
import Photographers from '../pages/Photographers';

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();

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
                        {user.name}
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