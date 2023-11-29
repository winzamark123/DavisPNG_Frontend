import axios from 'axios';
import tempProfile from '../assets/tempProfile.png';
const BASE_URL = 'https://davispng.azurewebsites.net';

const photographer1 = {
    uuid: "1",
    fname: "John",
    lname: "Doe",
    price: 1.00,
    birthdate: "01/01/2000",
    description: "My name is John",
    profile_pic: tempProfile,
}

const photographer2 = {
    uuid: "2",
    fname: "Katie",
    lname: "Peterson",
    price: 2.00,
    birthdate: "02/02/2000",
    description: "My name is Katie",
    profile_pic: tempProfile,

}

const photographers = [photographer1, photographer2]

export const fetchPhotographers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/photographer/read/marketplace`);
        console.log("Photographers:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching photographers:", error);
    }
}

export const tempFetchPhotographers = (userId) => {
    return photographers;
}

