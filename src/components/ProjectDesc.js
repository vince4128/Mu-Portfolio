import React from 'react';

const ProjectDesc = (props) => {

    return(
        <div className="c-project-description c-project-description--open animated fadeIn">
            <h1>{props.project.title}</h1>
            <p>{props.project.description}</p>
            <hr/>
            <p>Les liens</p>
        </div>
    )

}

export default ProjectDesc;