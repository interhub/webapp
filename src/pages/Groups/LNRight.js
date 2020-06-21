import React from "react";
import LNProfileFew from "./LNProfileFew";
import LNRating from "./LNRating";


/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СПРАВА, обрезка профиля + рейтинг*/

function LNRight() {
    return(
        <div className="LNRight">
            <LNProfileFew/>
            <LNRating/>
        </div>
    )
}

export default LNRight;