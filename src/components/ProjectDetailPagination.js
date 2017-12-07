import React from 'react';

const ProjectDetailPagination = (props) => {

    console.log("### detailPagination project " + JSON.stringify(props.project));

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
            onMouseOver={()=>props.over(i)}
            onMouseOut={()=>props.over(i)}
            >
            <i className="fa fa-circle" aria-hidden="true"></i>
            <span><img width="150px" height="150px" src={`img/${props.project.images[i].src}`}/></span>
            </li>);    
        }else{
            dot.push(<li
            key={i}
            onClick={()=>props.select(i)}
            onMouseOver={()=>props.over(i)}
            onMouseOut={()=>props.over(0)}
            >
            <i className="fa fa-circle-o" aria-hidden="true"></i>
            <span><img width="150px" height="150px" src={`img/${props.project.images[i].src}`}/></span>
            </li>);   
        }
    }

    return(
        <ul className="c-projectPagination">
            {dot}
        </ul>
    )

}

export default ProjectDetailPagination;