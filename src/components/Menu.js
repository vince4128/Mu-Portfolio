import React from 'react';
import { NavLink } from 'react-router-dom';
import Apropos from './Apropos';

const Menu = (props) => {

    if(props.parent){
        return (
            <ul className="c-menu">
                <li className="c-menu--left">
                    <h3>| <Apropos txt={"À PROPOS"}/></h3>
                </li>
                <li className="c-menu--right">
                    <NavLink to={`${props.parent}`}>
                        <h3>| <i className="c-project-description__btn--close fa fa-2x fa-times" aria-hidden="true"></i></h3>
                    </NavLink>
                </li>
                <li className="c-menu--right">
                    <NavLink to="/list">
                        <h3>| <span>INDEX</span></h3>
                    </NavLink>
                </li>
            </ul>
        )
    } else{
        return (
            <ul className="c-menu">
                <li className="c-menu--left">
                    <h3>| <Apropos txt={"À PROPOS"}/></h3>
                </li>
                <li className="c-menu--right">
                    <NavLink to="/list">
                        <h3>| <span>INDEX</span></h3>
                    </NavLink>
                </li>
            </ul>
        )
    }

    

}

export default Menu;
