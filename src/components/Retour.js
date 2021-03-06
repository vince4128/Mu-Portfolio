import React from 'react';
import { NavLink } from 'react-router-dom';

const Retour = (props) => {

    return(
        <span className="c-retour">
            <NavLink to={`${props.parent}`}>
                {/*<i className="fa fa-2x fa-times" aria-hidden="true"></i>*/}
                <img src="img/icon_quitter.png" />
            </NavLink>
        </span>
    )

}

export default Retour;