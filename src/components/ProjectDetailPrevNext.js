import React from 'react';

const ProjectDetailPrevNext = (props) => {

    function prev(){
        if(props.currentImage > 0){
            return props.currentImage - 1;
        }else{
            return props.totalImages-1;
        }
    };

    function next(){
        if(props.currentImage < props.totalImages-1){
            return props.currentImage + 1;
        }else{
            return 0;
        }
    };

    return(
        <div className="c-prevnext">
            <div
                className="c-prevnext__prev"
                onClick={()=>props.selectImage(prev())}>prev
            >
            </div>
            <div
                className="c-prevnext__next"
                onClick={()=>props.selectImage(next())}>next
            >
            </div>
        </div>
    )

}

export default ProjectDetailPrevNext;