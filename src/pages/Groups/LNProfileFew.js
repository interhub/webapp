/*ОБРЕЗАННЫЙ ПРОФИЛЬ С ГРАФИКОМ*/

import React from "react";
import prof from "./images/Ellipse 40.png"
import rait from "./images/Group 551.png"

/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СПРАВА, обрезка профиля + рейтинг*/

function LNProfileFew() {
    return(
        <div className="LNProfileFew">
            <div>Мой профиль</div>
            <div><img src={prof}/></div>
            <div>Казакова Оксана</div>
            <div>231 место</div>
            <div>7592 очка</div>
            <img src={rait}/>

        </div>
    )
}

export default LNProfileFew;