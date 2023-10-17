import { useAuth0 } from "@auth0/auth0-react";
import './AboutUs.scss';

const AboutUs = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        (
            <div className="temp-bg">This will be the AboutUS Page when LoggedIN</div>
        )
    )
}

export default AboutUs;


