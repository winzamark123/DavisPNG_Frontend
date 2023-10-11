import { useAuth0 } from "@auth0/auth0-react";

const LogoutBTN = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        )
    )
}

export default LogoutBTN;
