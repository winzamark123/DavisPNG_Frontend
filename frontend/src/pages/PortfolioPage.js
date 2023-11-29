import { useParams } from 'react-router-dom';
import './css/profilePage.scss';
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

import { fetchPhotographers } from '../api/marketplaceAPI';

const getPhotographer = async (uuid) => {
    try {
        const response = await fetchPhotographers();
        const photographers = response.body;
        return photographers.find((photographer) => photographer.uuid === uuid);
    } catch (error) {
        console.error("Error fetching photographers:", error);
    }

}

const PortfolioPage = () => {
    const { uuid } = useParams();
    const [photographer, setPhotographer] = useState(null);

    useEffect(() => {
        const loadPhotographer = async () => {
            try {
                const photographer = await getPhotographer(uuid);
                if (photographer) {
                    setPhotographer(photographer);
                }
            } catch (error) {
                console.error("Error fetching photographers:", error);
            }
        };

        loadPhotographer();
    }, [uuid]);


    console.log(photographer)
    if (!photographer) return (<div>Loading...</div>)

    return (
        (
            <div className="profilePage">
                <NavBar />
                <div className="profile_container">
                    <div className="profile">
                        <div className="profile_left">
                            {/* <div className="profile_left_pic" style={{ backgroundImage: `url(${photographer.profilePic})` }}></div> */}

                            <div className="profile_left_text">
                                <div className="profile_left_text_row">Name: {photographer.fname}</div>
                                <div className="profile_left_text_row">Price: {photographer.price}</div>





                            </div>
                        </div>
                        <div className="profile_right">
                            <div className="profile_right_descrip">
                                {photographer.description}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="portfolio_container">
                    <div className="portfolio">

                    </div>
                </div>
            </div>
        )
    )
}

export default PortfolioPage;
