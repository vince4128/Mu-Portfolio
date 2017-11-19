import React from 'react';

const ProjectDetailPagination = (props) => {

    let dot = [];

    let active = true;
    let inactive = false;

    function isActive(index){
        if(index === props.current){
            return active;
        }else{
            return inactive;
        }
    }

    for(let i = 0; i<props.total; i++){
        if(isActive(i)){
            dot.push(<li
            key={i}
            onClick={()=>props.select(i)}
            >
            <i className="fa fa-circle" aria-hidden="true"></i>
            </li>);    
        }else{
            dot.push(<li
            key={i}
            onClick={()=>props.select(i)}
            >
            <i className="fa fa-circle-o" aria-hidden="true"></i>
            </li>);   
        }
    }

    return(
        dot
    )

}

export default ProjectDetailPagination;