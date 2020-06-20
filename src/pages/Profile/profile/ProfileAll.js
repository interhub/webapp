import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileLinks from "./ProfileLinks";
import ProfileActive from "./ProfileActive";

/*ОСНОВНАЯ СТРАНИЦА ПРОФИЛЯ*/
function ProfileAll() {
  return <div className="ProfileAll">
    <ProfileLinks/>
    <ProfileActive/>
    <ProfileInfo/>
  </div>
}

export default ProfileAll;
