import './settingsPage.scss'
import { getUserProfile } from '../api/user';


const SettingsPage = () => {
    const tempUser = getUserProfile();
    return (
        <div className="settingsPage">
            <div className="settingsPage_left">
                <div className="settingsPage_left_container">
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