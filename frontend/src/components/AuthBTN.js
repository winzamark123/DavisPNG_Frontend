import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { checkAndCreateUser, createUserProfile } from '../api/user';
const AuthBTN = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();

    const fetchTokenAndUserID = async () => {
        if (isAuthenticated) {
            try {
                const token = await getAccessTokenSilently();
                const userID = user.sub.split('|')[1];

                console.log("JWT Token:", token);
                console.log("User ID:", userID);
            } catch (error) {
                console.error("Error fetching the token:", error);
            }
        }
    };

    const tempCreateUser = async () => {
        try {
            const token = await getAccessTokenSilently();
            createUserProfile(user, token, user.sub.split('|')[1]);

        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    const handleClick = async () => {
        if (isAuthenticated) {
            await logout({ returnTo: window.location.origin });
        } else {
            await loginWithRedirect();

        }
    }

    useEffect(() => {
        fetchTokenAndUserID();
        if (isAuthenticated) {
            // checkAndCreateUser(getAccessTokenSilently, user);
            //Temporary 
            // tempCreateUser();
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