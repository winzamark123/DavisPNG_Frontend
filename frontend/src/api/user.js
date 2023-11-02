
import axios from 'axios';
import tempProfile from '../assets/tempProfile.png';
import { useAuth0 } from "@auth0/auth0-react";

const BASE_URL = 'https://davispng.azurewebsites.net';

const user = {
    "id": "1",
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "1234567890",
    "user_type": "photographer",
    "profile_picture": tempProfile,
    "bio": "I am a photographer",
    "location": "Davis, CA",
    "website": "https://www.google.com",
    "instagram": "https://www.instagram.com",
    "facebook": "https://www.facebook.com",
    "twitter": "https://www.twitter.com",

}

export const fetchTokenAndUserID = async (user, getAccessTokenSilently) => {
    if (user) {
        try {
            const token = await getAccessTokenSilently();
            const userID = user.sub.split('|')[1];
            console.log("JWT Token:", token);
            console.log("User ID:", userID);
            return { token, userID };
        } catch (error) {
            console.error("Error fetching the token:", error);
            return { token: null, userID: null };
        }
    }
};

export const tempCreateUser = async (user, getAccessTokenSilently) => {
    try {
        const token = await getAccessTokenSilently();
        createUserProfile(user, token, user.sub.split('|')[1]);
    } catch (error) {
        console.error("Error creating user:", error);
    }
};


// Fetch user profile information
export const getUserProfile = (userId) => {
    // return axios.get(`${BASE_URL}/user/${userId}`); 
    return user;
};

// Update user profile information
export const updateUserProfile = (user, getAccessTokenSilently, data) => {
    console.log(data);
    const { token, userID } = fetchTokenAndUserID(user, getAccessTokenSilently);
    return axios.put(`${BASE_URL}/user/update/user_type`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Secret': "this is update"
        }
    }).then(response => {
        console.log("Successfully updated user profile:", response.data);
        return response.data;
    }).catch(error => {
        console.error("Error updating user profile:", error);
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
        // throw error; // This will ensure that the error is propagated to the caller for further handling if needed.
    }
    )
};

export const createUserProfile = (data, getAccessTokenSilently) => {
    console.log("createUserProfile");
    const { token, userID } = fetchTokenAndUserID(user, getAccessTokenSilently);
    return axios.post(`${BASE_URL}/user/create/`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Secret': "hi"
        }
    })
        .then(response => {
            // Check if the user already exists
            if (response.data.description === "User already exists") {
                console.log("User already exists.");
                // return null; // or you could return a specific object or throw an error
                // return response.data;
                return null;
            } else {
                console.log("Successfully created user profile:", response.data);
                return response.data;
            }
        })
        .catch(error => {
            console.error("Error creating user profile:", error);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
            console.log('Response headers:', error.response.headers);
            // throw error; // This will ensure that the error is propagated to the caller for further handling if needed.
        });
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
