import React from 'react';
import { NavLink } from 'react-router-dom';
import Apropos from './Apropos';

const Menu = (props) => {

    return (
        <ul className="c-menu">
            <li className="c-menu--left">
                <h3>| <Apropos txt={"À PROPOS"}/></h3>
            </li>
            <li className="c-menu--right">
                <NavLink to="/list">
                    <h3>| <span>X</span></h3>
                </NavLink>
            </li>
            <li className="c-menu--right">
                <NavLink to="/list">
                    <h3>| <span>INDEX</span></h3>
                </NavLink>
            </li>
        </ul>
    )

}

export default Menu;
