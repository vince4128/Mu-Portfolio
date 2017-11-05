import React from 'react';

const ProjectDetailPagination = (props) => {

    let dot = [];

    let active = "x";
    let inactive = "0";

    function isActive(index){
        if(index === props.currentImage){
            return active;
        }else{
            return inactive;
        }
    }

    for(let i = 0; i<props.totalImages; i++){
        dot.push(
            <li
                key={i}
                onClick={()=>props.selectImage(i)}
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