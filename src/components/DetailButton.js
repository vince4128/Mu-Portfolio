import React from 'react';

const DetailButton = (props) => {

    return(
        <div className="c-button-detail">
            <div>
                <i className="fa fa-eye fa-3x" aria-hidden="true"></i>
            </div>
            <div className="c-button-detail--legend">voir le projet</div>
        </div>
    )

}

export default DetailButton;