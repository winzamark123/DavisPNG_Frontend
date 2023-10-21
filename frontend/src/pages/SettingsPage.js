import './settingsPage.scss'
import { getUserProfile } from '../api/user';

const SettingsPage = () => {
    const tempUser = getUserProfile();
    return (
        <div className="settingsPage">
            <div className="settings_container">
                <div className="settings">
                    <div className="settings_inner">
                        <div className="settings_inner_prof">
                            <div className="settings_inner_prof_pic" style={{ backgroundImage: `url(${tempUser.profilePic})` }}></div>
                            <div className="settings_inner_prof_edit"></div>
                        </div>
                    </div>

                    <div className="settings_inner_info">
                        <div className="settings_inner_info_form">
                            <div className="settings_inner_info_form_left"></div>
                            <div className="settings_inner_info_form_right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage