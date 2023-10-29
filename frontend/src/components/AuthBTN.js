import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
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

    const handleClick = async () => {
        if (isAuthenticated) {
            await logout({ returnTo: window.location.origin });
        } else {
            await loginWithRedirect();
        }
    }

    useEffect(() => {
        fetchTokenAndUserID();
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