import React from 'react';

const ProjectName = (props) => {

    if(props.project === undefined){
        return (
            
            <div className={"c-projectName"}>
            </div>
        )
      } else {
        return (
            
            <div className={"c-projectName"}>
                <h1><strong>{props.project.title}</strong></h1>
                <h2>{props.project.category} - {props.project.year}</h2>
            </div>
        )
      }

   

}

export default ProjectName;