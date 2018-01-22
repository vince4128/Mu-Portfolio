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
                {props.project.title} — {props.project.category} — {props.project.year}
            </div>
        )
      }

   

}

export default ProjectName;