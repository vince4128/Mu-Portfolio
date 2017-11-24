import React from 'react';

const ProjectName = (props) => {

    return (
        <div className={"c-projectName " + props.anim}>
            <h1><strong>{props.project.title}</strong></h1>
            <h2>{props.project.category} - {props.project.year}</h2>
        </div>
    )

}

export default ProjectName;