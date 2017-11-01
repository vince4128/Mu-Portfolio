import React from 'react';

const ProjectPagination = (props) => {

    let dot = [];

    let active = "x";
    let inactive = "o";

    function isActive(index){
        if(index === props.projectSelected){
            return active;
        }else{
            return inactive;
        }
    }


    for(let i = 0; i<props.totalProject; i++){
        dot.push(
            <li key={i}>{isActive(i)}</li>
        )
    }

    return(
        dot
    )

}

export default ProjectPagination;