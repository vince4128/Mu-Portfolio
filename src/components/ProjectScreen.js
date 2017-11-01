import React from 'react';

const ProjectScreen = (props) => {

    return(
        <li onClick={()=>props.onProjectSelect(props.projet.id)}>
            <p>projet : {props.projet.projet}</p>
        </li>
    )

}

export default ProjectScreen;