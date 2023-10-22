import { useAuth0 } from "@auth0/auth0-react";

const Photographers = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="some">
                This will be the view for when Photographers LoggedIN

            </div>
        ) : ( //USER NOT LOGGED IN 
            <div className="nav_main_container">
                This will be the view for when Photographers LoggedOUT
            </div>
        )
    )
}

export default Photographers;

