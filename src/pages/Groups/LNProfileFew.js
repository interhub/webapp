/*ОБРЕЗАННЫЙ ПРОФИЛЬ С ГРАФИКОМ*/

import React from "react";
import prof from "./images/Ellipse 40.png"
import rait from "./images/Group 551.png"
import Avatar from "@material-ui/core/Avatar";

/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СПРАВА, обрезка профиля + рейтинг*/

function LNProfileFew() {
    return(
        <div className="LNProfileFew">
            <div className="LNProfileFew_head">Мой профиль</div>

            <div className="LNProfileFew_avaname">
                <Avatar className="LNProfileFew_ava" alt="" src={prof} />
                <div className="LNProfileFew_name">Казакова Оксана</div>
            </div>

            <div className="LNProfileFew_points">
                <div className="LNProfileFew_pointOne">231 место</div>
                <div className="LNProfileFew_pointTwo">7592 очка</div>
            </div>

            <img className="LNProfileFew_graph" src={rait}/>

        </div>
    )
}

export default LNProfileFew;