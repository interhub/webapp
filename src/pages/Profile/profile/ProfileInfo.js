import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

/*Страница профиля, правая часть, рыбка*/


const ProfileMin = ( {firstName, lastName, position, avatar} ) => {
  return (
    <div>
      <div>{avatar}</div>
      <div>{firstName}+" "+{lastName}</div>
      <div>{position}</div>
    </div>
  );
}

const ProfileAll = ( {email, phone, department, city} ) => {

  return (
    <ul className="">
      <li className="">
        <label className="">Email</label>
        <div className="">{email}</div>
      </li>
      <li className="">
        <label className="">Телефон</label>
        <div className="">{phone}</div>
      </li>
      <li className="">
        <label className="">Отделение</label>
        <div className="">{department}</div>
      </li>
      <li className="">
        <label className="">Город</label>
        <div className="">{city}</div>
      </li>
    </ul>
  );
}

function ProfileInfo() {
  return (<div className="ProfileInfo">
    <div>Персональная информация</div>
    <ProfileMin/>
    <ProfileAll

    />
  </div>)
}

export default ProfileInfo;
