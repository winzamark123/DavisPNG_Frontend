import { useParams } from 'react-router-dom';
import './css/profilePage.scss';
import NavBar from "../components/NavBar";

import { getPhotographers } from '../api/user';

const getPhotographer = (uuid) => {
    const photographers = getPhotographers();
    return photographers.find((photographer) => photographer.uuid === uuid);
}

const PortfolioPage = () => {
    const { uuid } = useParams();

    const photographer = getPhotographer(uuid);


    return (
        (
            <div className="profilePage">
                <NavBar />
                <div className="profile_container">
                    <div className="profile">
                        <div className="profile_left">
                            <div className="profile_left_pic" style={{ backgroundImage: `url(${photographer.profilePic})` }}>
                            </div>
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
