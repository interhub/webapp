import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from "@material-ui/core/IconButton";
import ProfileLinks from "../Profile/profile/ProfileLinks";


/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА ВЗЯТ ИЗ ПРОФИЛЯ*/

function LNLeft() {
    const mass = new Array(7).fill(1)

    return <div className="LNLeft">
        <div className="all_links">
            <Typography variant={'h5'} className="block_line_head">Заметки</Typography>
            <div className="block_lines">
            {mass.map(( el, i ) => {
                return (<IconButton className="one_block_line">
                    <Avatar>
                        <FolderIcon/>
                    </Avatar>
                    <Typography variant={'body1'}>
                        Ссылка 1
                    </Typography>
                </IconButton>)
            })} </div>
        </div>
    </div>

}

export default LNLeft;