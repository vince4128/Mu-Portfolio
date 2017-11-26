import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return(
        <ul className="c-menu">
            <li>
                <a href="/projets">
                <h3>| <span>Index</span></h3>
                </a>
            </li>
            <li>
                <h3>| <span>À propos</span></h3>
            </li>
        </ul>
    )

}

export default Menu;
