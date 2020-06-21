import React from "react";
import LNLeft from "./LNLeft.js";
import LNCenter from "./LNCenter.js";
import LNRight from "./LNRight.js";


/*ОСНОВНАЯ СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ*/
function LNAll() {
    return <div className="LNAll">
        <LNLeft/>
        <LNCenter/>
        <LNRight/>
    </div>
}

export default LNAll;