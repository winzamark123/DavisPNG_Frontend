import './settingsPage.scss'
import DatePicker from 'react-datepicker';
import { getUserProfile } from '../api/user';
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import { faMars, faVenus, faTransgender, faDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SettingsPage = () => {
    const tempUser = getUserProfile();
    const [firstName, setFirstName] = useState(tempUser.name);
    const [lastName, setLastName] = useState(tempUser.name);
    const [username, setUsername] = useState(tempUser.name);
    const [password, setPassword] = useState(tempUser.password);
    const [birthDate, setBirthDate] = useState(new Date());
    const [userGender, setuserGender] = useState(null);
    const [userPronouns, setuserPronouns] = useState(null);
    const [userLocation, setuserLocation] = useState("Davis, CA");


    const gender = {
        male: { text: "Male", icon: faMars },
        female: { text: "Female", icon: faVenus },
        other: { text: "Other", icon: faTransgender }
    }

    const pronouns = {
        he: { text: "He/Him", icon: null },
        she: { text: "She/Her", icon: null },
        they: { text: "They/Them", icon: null },
        other: { text: "Other", icon: null }
    }

    function DropdownMenu({ items = {}, category }) {
        const [open, setOpen] = useState(false);
        const [selectedText, setSelectedText] = useState("");

        useEffect(() => {
            console.log(selectedText); // This will log the updated value whenever selectedText changes
        }, [selectedText]);


        const handleSelect = (item) => {

            if (category === "Gender") {
                setuserGender(item.text);

            } else if (category === "Pronouns") {
                setuserPronouns(item.text);
            }

            setSelectedText(item.text);
            setOpen(false);
        }

        function DropdownItem({ item, onSelect }) {
            return (
                <div href="#" className="dropdown_item" onClick={() => onSelect(item)}>
                    <span className="icon-button">
                        <FontAwesomeIcon icon={item.icon} />
                    </span>
                    {item.text}
                </div>
            );
        }

        return (
            <div className="dropdown">

                <button href="#" className="dropdown_BTN" onClick={() => setOpen(!open)}>
                    {selectedText || "Select" + category}
                    <FontAwesomeIcon icon={faDownLong} />
                </button>

                {open && Object.values(items).map((item) => (
                    <DropdownItem
                        key={item.text}
                        item={item}
                        onSelect={handleSelect}
                    >
                        {item}
                    </DropdownItem>
                ))}
            </div>
        )

    }

    function updateSettings() {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password, // Consider not storing password directly in state for security reasons.
            birthDate: birthDate,
            gender: gender,
            pronouns: pronouns,
            workLocation: "Davis, CA" // For now, as per your code
        };

        const jsonData = JSON.stringify(userData);

        // Now, send jsonData to your backend
        sendToBackend(jsonData);
    }

    function sendToBackend(data) {
        // Send data to backend

        // Using Fetch API as an example:
        fetch('YOUR_BACKEND_ENDPOINT_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle the response from your backend here.
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }


    return (
        <div className="settingsPage">
            <div className="settingsPage_left">
                <div className="settingsPage_left_container">
                    <div className="settingsPage_left_container_title">
                        PERSONAL INFORMATION
                    </div>
                    <div className="settingsPage_left_container_profile">
                        <div className="settingsPage_left_container_profile_pic"></div>
                        <div className="settingsPage_left_container_profile_edit"></div>
                    </div>

                    <div className="settingsPage_left_container_form">
                        <div className="settingsPage_left_container_form_firstName">
                            <div className="settingsPage_left_container_form_firstName_label">First Name</div>
                            <div className="settingsPage_left_container_form_firstName_input">
                                <input type="text"
                                    placeholder={tempUser.name}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_lastName">
                            <div className="settingsPage_left_container_form_lastName_label">Last Name</div>
                            <div className="settingsPage_left_container_form_lastName_input">
                                <input type="text"
                                    placeholder={tempUser.name}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_username">
                            <div className="settingsPage_left_container_form_username_label">Username</div>
                            <div className="settingsPage_left_container_form_username_input">
                                <input type="text"
                                    placeholder={tempUser.name}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* This might need to Change as it is not secured to save password like this */}
                        <div className="settingsPage_left_container_form_password">
                            <div className="settingsPage_left_container_form_password_label">Password</div>
                            <div className="settingsPage_left_container_form_password_input">
                                <input type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_BD">
                            <div className="settingsPage_left_container_form_BD_label">Birth Date</div>
                            <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />

                        </div>

                        <div className="settings_Page_left_container_form_gender">
                            <div className="settingsPage_left_container_form_gender_label">Gender</div>
                            <DropdownMenu
                                items={gender} category="Gender">
                            </DropdownMenu>
                        </div>
                        <div className="settingsPage_left_container_form_pronouns">
                            <div className="settingsPage_left_container_form_prounouns_label">Pronouns</div>
                            <DropdownMenu
                                items={pronouns} category="Pronouns">
                            </DropdownMenu>
                        </div>
                        <div className="settingsPage_left_container_form_workLocation">
                            <div className="settingsPage_left_container_form_workLocation_label">Working Location</div>
                            <div className="settingsPage_left_container_form_workLocation_input">
                                <input type="text" placeholder={tempUser.name} value={"Davis, CA"} /> {/* Davis for now */}
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_button">
                            <button onClick={() => updateSettings}>Update Settings</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="settingsPage_right">

            </div>
            {/* <div className="settings_lock">
                <div className="settings_lock_icons">
                    <i class="fi fi-bs-circle-user"></i>
                    <i class="fi fi-sr-lock"></i>
                </div>
            </div> */}

        </div>
    )
}

export default SettingsPage