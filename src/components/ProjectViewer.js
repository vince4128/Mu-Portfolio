import React from 'react';
import ProjectScreen from './ProjectScreen';

const ProjectViewer = (props) => {

    const projectItems = props.projets.map((project) => {
        return(
            <ProjectScreen
            projet={project}
            key={project.id}
            onProjectSelect={props.onProjectSelect}
            projectSelect={props.projectSelected}
            totalProject={props.totalProject}
            />
        );
    });

    return(
        <ul className="c-projectViewer">
            {projectItems}
        </ul>
    )

}

export default ProjectViewer;