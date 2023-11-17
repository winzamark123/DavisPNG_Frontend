import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { tempCreateUser, fetchTokenAndUserID, createUserProfile } from '../api/user';
import "./cssComp/authBTN.scss";
const AuthBTN = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();


    const handleClick = async () => {
        if (isAuthenticated) {
            await logout({ returnTo: window.location.origin });
        } else {
            await loginWithRedirect();

            //Temporary Lead to Landing Page
            // window.location.href = "/landing";

        }
    }

    useEffect(() => {
        fetchTokenAndUserID(getAccessTokenSilently, user);
        if (isAuthenticated) {
            // checkAndCreateUser(getAccessTokenSilently, user);
            //Temporary 
            createUserProfile(user, getAccessTokenSilently);
        }
    }, [isAuthenticated]);

    return (
        <>
            <span className="AuthButton" onClick={handleClick}>
                {isAuthenticated ? "Log Out" : "LogIn/SignUP"}
            </span>
        </>
    );
}

export default AuthBTN;