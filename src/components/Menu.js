import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return(
        <ul className="c-menu">
            <li>
                <Link to={`/projets`}>
                | Index
                </Link>
            </li>
            <li>| À propos</li>
        </ul>
    )

}

export default Menu;