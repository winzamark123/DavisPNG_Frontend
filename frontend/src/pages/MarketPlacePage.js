import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../components/NavBar";
import { getPhotographers } from "../api/userAPI";
import { tempFetchPhotographers, fetchPhotographers } from "../api/marketplaceAPI";
import './css/marketPlacePage.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";


const PhotographerCard = ({ photographer }) => {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/portfolio/${photographer.uuid}`);
    }
    return (
        <div className="photographer_card" onClick={handleClick}>
            <img src={photographer.profile_pic} alt={photographer.name} />
            <h3>{photographer.fname}</h3>
            <h3>{photographer.lname}</h3>
            <p>{photographer.uuid}</p>
        </div>
    );
};

const MarketPlace = () => {
    const [photographers, setPhotographers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchPhotographers();
                if (response.body) {
                    setPhotographers(response.body);
                }
            } catch (error) {
                console.error("Error fetching photographers:", error);
            }
        };

        loadData();
    }, []);

    return (
        <div className="marketplace">
            <div className="marketplace_nav">
                <NavBar />
            </div>
            <div className="marketplace_header">
                <span>Our Photographers</span>
            </div>
            <div className="marketplace_body">
                <div className="marketplace_body_photographers">
                    {photographers.map((photographer, index) => (
                        <PhotographerCard key={index} photographer={photographer} />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default MarketPlace;

