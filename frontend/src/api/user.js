// TEMPORARY MOCK API 

// import axios from 'axios';
import tempProfile from '../assets/tempProfile.png';
const BASE_URL = 'https://yourbackendurl.com/api';
const user = {
    ID: 1234,
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    profilePic: tempProfile,
    profileDescrip: "fdsakl;jfkl;sajdfkl;jasdfkl;jasdkl;fjkl;asdfkl;asdkl;fjaskl;djf", 
    price: 80,
    age: 29

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

// ... any other user-related API functions
