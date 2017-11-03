import React from 'react';

const PrevNext = (props) => {

    function nextProject(){
        let newProj = 0;
        if(props.projectSelected < totalProject){
           newProj = props.projectSelected++;
        }else{
            newProj = 0;
        }
        alert('nextP ' + newProj);
        return newProj;
    }

    function prevProject(){
        let newProj = 0;
        if(props.projectSelected > 0){
            newProj = props.projectSelected--;
        }else{
            newProj = props.projectSelected;
        }
        alert('prevP' + newProj);
        return newProj;
    }

    return(
        <div className="c-prevnext">
            <div 
                className="c-prevnext__prev"
                onClick={()=>props.onProjectSelect(prevProject())}>prev
            </div>
            <div 
                className="c-prevnext__next"
                onClick={()=>props.onProjectSelect(nextProject())}>next
            </div>
        </div>
    )

}

export default PrevNext;