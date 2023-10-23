import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../components/NavBar";
const Photographers = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="photographersPage">
            <NavBar />
            isAuthenticated ? (
            <div className="some">
                This will be the view for when Photographers LoggedIN

            </div>
            ) : ( //USER NOT LOGGED IN
            <div className="nav_main_container">
                This will be the view for when Photographers LoggedOUT
            </div>
            )
        </div>

    )
}

export default Photographers;

