import React from 'react';

const PrevNext = (props) => {

    function prev(){
        if(props.current > 0){            
            return props.current - 1;
        }else{            
            return props.total-1;
        }
    };

    function next(){
        if(props.current < props.total-1){            
            return props.current + 1;
        }else{            
            return 0;
        }
    };

    return(
        <div className="c-prevnext">
            <div
                className="c-prevnext__prev"
                onClick={()=>props.select(prev())}>
            </div>
            <div
                className="c-prevnext__next"
                onClick={()=>props.select(next())}>
            </div>
        </div>
    )

}

export default PrevNext;