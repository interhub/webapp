import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from "@material-ui/core/IconButton";
import Left from "../Profile/images/Left panel.png"

/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА ВЗЯТ ИЗ ПРОФИЛЯ*/

function LNLeft() {
    return (
        <img src={Left}/>
    )
}

export default LNLeft;