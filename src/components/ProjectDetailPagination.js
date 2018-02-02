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

    function displayImg(){
        if(props.project.images){
            return <img src={`img/${props.project.images[i].src}`}/>;
        }else{
            return
        }
    }

    for(let i = 0; i<props.total; i++){
        const thumb = `img/${(props.project.images[i].src).slice(0,-4)}_sm.jpg`;
        if(isActive(i)){
            dot.push(<li
            key={i}
            onClick={()=>props.select(i)}
            onMouseOver={()=>props.over(i)}
            onMouseOut={()=>props.over(i)}
            >
            <i className="fa fa-circle" aria-hidden="true"></i>
            <span class="animated fadeIn">
                {/*props.preview ? <img src={`img/${props.project.images[i].src}`}/> : '-'*/}
                {props.preview ? <img src={thumb}/> : '-'}
            </span>
            </li>);    
        }else{
            dot.push(<li
            key={i}
            onClick={()=>props.select(i)}
            onMouseOver={()=>props.over(i)}
            onMouseOut={()=>props.over(0)}
            >
            <i className="fa fa-circle-o" aria-hidden="true"></i>
            <span class="animated fadeIn">
                {/*props.preview ? <img src={`img/${props.project.images[i].src}`}/> : '-'*/}
                {props.preview ? <img src={thumb}/> : '-'}
            </span>
            </li>);   
        }
    }

    return(
        <ul className="c-projectPagination animated fadeIn">
            {dot}
        </ul>
    )

}

export default ProjectDetailPagination;