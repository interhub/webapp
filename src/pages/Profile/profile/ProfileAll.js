import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileLinks from "./ProfileLinks";
import ProfileActive from "./ProfileActive";
/*ОСНОВНАЯ СТРАНИЦА ПРОФИЛЯ*/
function ProfileAll() {
    let html =
        <div className="ProfileAll">
           <ProfileLinks />
           <ProfileActive />
           <ProfileInfo />
        </div>
    return html;
}

export default ProfileAll;
