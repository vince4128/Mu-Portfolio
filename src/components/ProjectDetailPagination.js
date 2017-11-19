import React from 'react';

const ProjectDetailPagination = (props) => {

    let dot = [];

    let active = "x";
    let inactive = "0";

    function isActive(index){
        if(index === props.current){
            return active;
        }else{
            return inactive;
        }
    }

    for(let i = 0; i<props.total; i++){
        dot.push(
            <li
                key={i}
                onClick={()=>props.select(i)}
            >
            {isActive(i)}
            </li>
        )
    }

    return(
        dot
    )

}

export default ProjectDetailPagination;