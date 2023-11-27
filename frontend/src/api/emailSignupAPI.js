import axios from 'axios';

const BASE_URL = 'https://davispng.azurewebsites.net';

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