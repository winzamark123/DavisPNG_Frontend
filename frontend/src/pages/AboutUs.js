import { useAuth0 } from "@auth0/auth0-react";
import './AboutUs.scss';

const AboutUs = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        (
            <div className="temp-bg"></div>
        )
    )
}

export default AboutUs;


