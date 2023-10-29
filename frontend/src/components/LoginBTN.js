import { useAuth0 } from "@auth0/auth0-react";

const LoginBTN = () => {
    const { loginWithRedirect, isAuthenticated, user, getTokenSilently } = useAuth0();

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

    const handleClick = async () => {
        await loginWithRedirect();
        fetchTokenAndUserID();
    }

    return (
        <>
            {!isAuthenticated && (
                <button onClick={handleClick}>Log In</button>
            )}
        </>
    );
}

export default LoginBTN;