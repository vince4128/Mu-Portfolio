import React from 'react';

const ProjectName = (props) => {

    //collapsible component
    return(
        <div className="c-projectName">
            <h2>h2 {props.title}</h2>
            <h3>h3 {props.category} - {props.year}</h3>
        </div>
    )


}

export default ProjectName;