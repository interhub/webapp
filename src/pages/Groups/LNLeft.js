import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from "@material-ui/core/IconButton";
import ProfileLinks from "../../components/ProfileLinks"

/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА ВЗЯТ ИЗ ПРОФИЛЯ*/

function LNLeft() {
    return (
        <ProfileLinks/>
    )
}

export default LNLeft;