import React from 'react';

const ProjectScreen = (props) => {

    function isWhat(index){
        if(index === props.projet.id){
            return "c-projectScreen--active"
        }else if(index === (props.projet.id - 1)){
            return "c-projectScreen--prev"
        }else if(index === (props.projet.id + 1)){
            return "c-projetScreen--next"
        }
    }

    return(
        <li className={"c-projectScreen " + isWhat(props.projet.id)} onClick={()=>props.onProjectSelect(props.projet.id)}>
            <p>projet : {props.projet.projet}</p>
        </li>
    )

}

export default ProjectScreen;