import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../components/NavBar";
import './css/marketPlacePage.scss';


const PhotographerCard = ({ photographer }) => {
    return (
        <div className="photographer_card">
            <img src={photographer.imageURL} alt={photographer.name} />
            <h3>{photographer.name}</h3>
            <p>{photographer.price}</p>
        </div>
    );
};

const MarketPlace = () => {


    return (
        <div className="marketplace">
            <div className="marketplace_nav">
                <NavBar />
            </div>
            <div className="marketplace_header">
                <span>Our Photographers</span>
            </div>

        </div>

    )
}

export default MarketPlace;

