
import axios from 'axios';
import tempProfile from '../assets/tempProfile.png';
import { useAuth0 } from "@auth0/auth0-react";

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

export const fetchTokenAndUserID = async (user, getAccessTokenSilently) => {
    if (user) {
        try {
            const token = await getAccessTokenSilently();
            const userID = user.sub.split('|')[1];
            // console.log("JWT Token:", token);
            // console.log("User ID:", userID);
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
export const getPhotographers = (userId) => {
    // return axios.get(`${BASE_URL}/user/${userId}`); 
    return photographers;
};

export const updateUserChoice = async (user, getAccessTokenSilently, data) => {
    const { token } = fetchTokenAndUserID(user, getAccessTokenSilently);
    return axios.put(`${BASE_URL}/user/update/user_type`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Secret': "this is update choice"
        }
    }).then(response => {
        console.log("Successfully update User Choice:", response.data);
        return response.data;
    }).catch(error => {
        console.error("Error updating user Choice:", error);
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
        // throw error; // This will ensure that the error is propagated to the caller for further handling if needed.
    }
    )
};

// Update photographer profile information
export const updateUserProfile = (user, getAccessTokenSilently, data) => {
    console.log(data);
    const { token } = fetchTokenAndUserID(user, getAccessTokenSilently);
    return axios.put(`${BASE_URL}/photographer/update/`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Secret': "this is update info"
        }
    }).then(response => {
        console.log("Successfully updated photographer profile:", response.data);
        return response.data;
    }).catch(error => {
        console.error("Error updating photographer profile:", error);
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
        throw error; // This will ensure that the error is propagated to the caller for further handling if needed.
    }
    )
};
//signup email for the landing page 
export const emailSignUp = async (email) => {
    console.log("EmailSignUp:", email);

    //No need for Authorization and Secret headers
    const headers = {
        'Content-Type': 'application/json'
    };

    return axios.post(`${BASE_URL}/landing/`, email, { headers })
        .then(response => {
            console.log("Successfully sent email:", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error sending email:", error);
            if (error.response) {
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            }
            // throw error; // Uncomment this if you want to propagate the error to the caller
        });
}

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

// export const checkAndCreateUser = async (token, userData) => {
//     try {
//         const checkResponse = await axios.get(`${BASE_URL}/user/`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });

//         if (!checkResponse.data.userExists) {
//             await createUserProfile(userData.sub.split('|')[1], userData, token, checkResponse.data.secret);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };



// ... any other user-related API functions
