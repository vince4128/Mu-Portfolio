import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return(
        <ul className="c-menu">
            <li>
                <a href="/projets">
                | Index
                </a>
            </li>
            <li>| À propos</li>
        </ul>
    )

}

export default Menu;
