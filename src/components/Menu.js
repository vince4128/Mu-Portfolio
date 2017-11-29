import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {

    return (
        <ul className="c-menu">
            <li>
                <NavLink to="/list">
                    <h3>| <span>Index</span></h3>
                </NavLink>
            </li>
            <li>
                <h3>| <span>À propos</span></h3>
            </li>
        </ul>
    )

}

export default Menu;
