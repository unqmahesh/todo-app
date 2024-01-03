import react, { useState, useContext } from 'react'
import './profile.css'

import {signOut} from '../../../../backend-api/authenticate.js'

function Profile(){

    const [profileBtnClickedToOpen, setProfileBtnClickedToOpen] = useState(false)


    function profileBtnClicked(){
        setProfileBtnClickedToOpen((prev) => !prev)
    }

    async function handleSignOutClick(){
        const response = await signOut()
        if (response.success){
            window.location.reload()
        }
    }

    return (
        <div className='profile'>

            <div className='profile_btn' onClick={profileBtnClicked}><p>M</p></div>

            <div className={`profile_options ${profileBtnClickedToOpen && 'profile_options_visible'}`}>
                <div className='profile_options_nav'>
                    <button >Change Profile</button>
                    <button >Settings</button>
                </div>
                <div className='profile_options_signout'>
                    <button onClick={handleSignOutClick}>signout</button>
                </div>
            </div>

        </div>
    )
}

export default Profile