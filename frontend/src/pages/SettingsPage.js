import './settingsPage.scss'
import DatePicker from 'react-datepicker';
import { getUserProfile } from '../api/user';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SettingsPage = () => {
    const tempUser = getUserProfile();
    const [firstName, setFirstName] = useState(tempUser.name);
    const [lastName, setLastName] = useState(tempUser.name);
    const [username, setUsername] = useState(tempUser.name);
    const [password, setPassword] = useState(tempUser.name);
    const [birthDate, setBirthDate] = useState(new Date());

    const gender = {
        male: "Male",
        female: "Female",
        other: "Other"
    }

    const genderIcon = {
    }

    const pronouns = {
        he: "He/Him",
        she: "She/Her",
        they: "They/Them",
        other: "Other"
    }

    function DropdownMenu({ items = {}, leftIcon, rightIcon }) {
        const [open, setOpen] = useState(false);

        function DropdownItem(props) {
            return (
                <div href="#" className="dropdown_item">
                    <span className="icon-button">{props.leftIcon}</span>
                    {props.children}
                    <span className="icon-right">{props.rightIcon}</span>
                </div>
            );
        }

        return (
            <div className="dropdown">
                <a href="#" className="dropdownBTN" onClick={() => setOpen(!open)}>
                    <span className="icon-button">{leftIcon}</span>
                </a>

                {open && Object.values(items).map((item) => (
                    <DropdownItem
                        key={item}
                        leftIcon={leftIcon}
                        rightIcon={rightIcon}
                    >
                        {item}
                    </DropdownItem>
                ))}
            </div>
        )
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
                                <input type="text" placeholder={tempUser.name} />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_lastName">
                            <div className="settingsPage_left_container_form_lastName_label">Last Name</div>
                            <div className="settingsPage_left_container_form_lastName_input">
                                <input type="text" placeholder={tempUser.name} />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_username">
                            <div className="settingsPage_left_container_form_username_label">Username</div>
                            <div className="settingsPage_left_container_form_username_input">
                                <input type="text" placeholder={tempUser.name} />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_password">
                            <div className="settingsPage_left_container_form_password_label">Password</div>
                            <div className="settingsPage_left_container_form_password_input">
                                <input type="password" placeholder="********" />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_BD">
                            <div className="settingsPage_left_container_form_BD_label">Birth Date</div>
                            <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />

                        </div>

                        <div className="settings_Page_left_container_form_gender">
                            <DropdownMenu
                                items={gender} leftIcon={<FontAwesomeIcon icon={faMars} />}>
                            </DropdownMenu>
                        </div>
                        <div className="settingsPage_left_container_form_confirm">
                            <div className="settingsPage_left_container_form_confirm_label">Confirm Password</div>
                            <div className="settingsPage_left_container_form_confirm_input">
                                <input type="password" placeholder="********" />
                            </div>
                        </div>
                        <div className="settingsPage_left_container_form_button">
                            <button>SAVE</button>
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