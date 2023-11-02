import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { tempCreateUser, fetchTokenAndUserID, createUserProfile } from '../api/user';
const AuthBTN = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();


    const handleClick = async () => {
        if (isAuthenticated) {
            await logout({ returnTo: window.location.origin });
        } else {
            await loginWithRedirect();

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
            <button onClick={handleClick}>
                {isAuthenticated ? "Log Out" : "Log In"}
            </button>
        </>
    );
}

export default AuthBTN;