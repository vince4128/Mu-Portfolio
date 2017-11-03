import React from 'react';

const PrevNext = (props) => {

    function prev(){
        if(props.projectSelected > 0){
            return props.projectSelected - 1;
        }else{
            return props.totalProject-1;
        }
    };

    function next(){
        if(props.projectSelected < props.totalProject-1){
            return props.projectSelected + 1;
        }else{
            return 0;
        }
    };

    return(
        <div className="c-prevnext">
            <div 
                className="c-prevnext__prev"
                onClick={()=>props.onProjectSelect(prev())}>prev
            </div>
            <div 
                className="c-prevnext__next"
                onClick={()=>props.onProjectSelect(next())}>next
            </div>
        </div>
    )

}

export default PrevNext;