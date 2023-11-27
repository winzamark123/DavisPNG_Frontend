import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { updateUserChoice } from '../api/userAPI';
import { useState } from 'react';
const ChoicePage = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const { choiceType, setChoiceType } = useState("");

    const handleChoiceClicked = async (value) => {
        const choiceData = {
            sub: user.sub,
            user_type: value
        }

        const jsonData = JSON.stringify(choiceData);

        // Now, send jsonData to your backend
        console.log(jsonData);

        await updateUserChoice(user, getAccessTokenSilently, jsonData);
    }

    return (isAuthenticated ? (
        <div className="choicePage" >
            <button onClick={() => handleChoiceClicked(0)} > Student</button>
            <button onClick={() => handleChoiceClicked(1)} > Photographer</button>
        </div>

    ) : (
        <div>User is not Authenticated</div>
    ))


}

export default ChoicePage
