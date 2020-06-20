import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileLinks from "../../../components/ProfileLinks";
import ProfileActive from "./ProfileActive";
import Left from "../images/Left panel.png"

/*ОСНОВНАЯ СТРАНИЦА ПРОФИЛЯ*/
function ProfileAll() {
  return <div className="ProfileAll">
    <img src={Left}/>
    <ProfileActive/>
    <ProfileInfo/>
  </div>
}

export default ProfileAll;
