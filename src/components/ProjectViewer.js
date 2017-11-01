import React from 'react';
import ProjectScreen from './ProjectScreen';

const ProjectViewer = (props) => {

    const projectItems = props.projets.map((project) => {
        return(
            <ProjectScreen
            projet={project}
            key={project.id}
            onProjectSelect={props.onProjectSelect}
            />
        );
    });

    return(
        <ul>
            {projectItems}
        </ul>
    )

}

export default ProjectViewer;