// TEMPORARY MOCK API 

// import axios from 'axios';
import axios from 'axios';
import tempProfile from '../assets/tempProfile.png';
const BASE_URL = 'https://davispng.azurewebsites.net';

const user = {
    ID: 1234,
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    profilePic: tempProfile,
    profileDescrip: "Jacques Morel is a multifaceted creator specializing in hosting, producing, and analog film photography. With a decade of digital media experience, Jacques has interviewed notable figures ranging from John Legend to Senator Cory Booker, and his photography has been featured in Blanc Magazine, Office Magazine, and MoMA Magazine. His unique storytelling ability and keen eye for capturing moments are what sets him apart. Jacques continues to roam the streets of Brooklyn and beyond, sharing his craft with the world one snapshot at a time.",
    price: 80,
    age: 29,
    gender: "F",

}

// Fetch user profile information
export const getUserProfile = (userId) => {
    // return axios.get(`${BASE_URL}/user/${userId}`); 
    return user;
};

// Update user profile information
export const updateUserProfile = (userId, data) => {
    // return axios.put(`${BASE_URL}/user/${userId}`, data);
};

export const createUserProfile = (data, token, secret) => {
    console.log("createUserProfile");
    return axios.post(`${BASE_URL}/user/create/`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Secret': secret
        }
    })
        .then(response => {
            console.log("Successfully created user profile:", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error creating user profile:", error);
            throw error; // This will ensure that the error is propagated to the caller for further handling if needed.
        });;
};

export const checkAndCreateUser = async (token, userData) => {
    try {
        const checkResponse = await axios.get(`${BASE_URL}/user/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!checkResponse.data.userExists) {
            await createUserProfile(userData.sub.split('|')[1], userData, token, checkResponse.data.secret);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

// ... any other user-related API functions
