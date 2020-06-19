import React from "react";

/*СТРАНИЦА ПРОФИЛЯ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА*/

function ProfileLinks() {
    let html =
        <div className="ProfileLinks">
            <div className="all_links">
                <div className="block_line_head">Блок 1</div>
                <ul className="block_link">
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 1</a></li>
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 2</a></li>
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 3</a></li>
                </ul>
                <p></p>
                <div className="block_line_head">Блок 2</div>
                <ul className="block_link">
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 1</a></li>
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 2</a></li>
                    <li className="one_block_line"><div className="circle_link"></div><a>Ссылка 3</a></li>
                </ul>
            </div>
        </div>
    return html;
}

export default ProfileLinks;