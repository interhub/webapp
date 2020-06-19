import React from "react";

/*СТРАНИЦА ПРОФИЛЯ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА*/

function ProfileLinks() {
    let html =
        <div className="ProfileLinks">
            <div className="all_links">
                <div className="block_line_head">Блок 1</div>
                <ul className="block_link">
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 1</li>
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 2</li>
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 3</li>
                </ul>
                <p></p>
                <div className="block_line_head">Блок 2</div>
                <ul className="block_link">
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 1</li>
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 2</li>
                    <li className="one_block_line"><div className="circle_link"></div>Ссылка 3</li>
                </ul>
            </div>
        </div>
    return html;
}

export default ProfileLinks;