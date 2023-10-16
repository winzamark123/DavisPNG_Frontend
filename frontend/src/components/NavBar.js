import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.scss';

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="nav_main_container">
                <ul className="nav_items">
                    <li className="nav_items_item">
                        <a href="/">PHOTOGRAPHERS</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="#">ABOUT US</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="#">{user.name}</a>
                    </li>
                </ul>
            </div>
        ) : ( //User NOT LOGGEDIN
            <div className="nav_main_container">
                <ul className="nav_items">
                    <li className="nav_items_item">
                        <a href="/">PHOTOGRAPHERS</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="#">ABOUT US</a>
                    </li>
                    <li className="nav_items_item">
                        <a href="#">SIGNUP / LOGIN</a>
                    </li>
                </ul>
            </div>
        )

    )
}

export default NavBar;