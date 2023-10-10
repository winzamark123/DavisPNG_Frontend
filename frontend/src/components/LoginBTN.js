import { useAuth0 } from "@auth0/auth0-react";

const LoginBTN = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>Log In</button>
        )
    )
}

export default LoginBTN;