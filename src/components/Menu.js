import React from 'react';
import { NavLink } from 'react-router-dom';
import Apropos from './Apropos';

const Menu = (props) => {

    /*if(props.parent){
        return (
            <ul className="c-menu">
                <li className="">
                    <Apropos txt={"À PROPOS"}/>
                </li>
                <li><hr/></li>
                <li className="">
                    <NavLink to="/list">
                        <span>INDEX</span>
                    </NavLink>
                </li>*/
                {/*<li className="c-menu--right">
                    <NavLink to={`${props.parent}`}>
                        <h3>| <i className="c-project-description__btn--close fa fa-2x fa-times" aria-hidden="true"></i></h3>
                    </NavLink>
                </li>*/}
            /*</ul>
        )
    } else{*/
        return (
            <ul className="c-menu">
                <li className="">
                    <Apropos txt={"À PROPOS"}/>
                </li>
                <li><hr/></li>
                <li className="">
                    <NavLink to="/list">
                        <span>INDEX</span>
                    </NavLink>
                </li>
            </ul>
        )
    //}

    

}

export default Menu;
