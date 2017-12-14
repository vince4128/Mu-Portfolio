import React, { Component } from 'react';

class ProjectListDetail extends Component {

    constructor(props) {
        super(props);

    }

    render(){

        let ulWidth =  0;

        _.map(this.props.images, image => {
            ulWidth++;
        });

        return(
            <div className="c-project-list__detail__images-wrapper ">
                <ul style={{ width:`${ulWidth*375}px` }}>
                    {
                        _.map(this.props.images, image => {
                            return (
                                <li
                                    key={image.index}
                                    className="c-project-list__detail__image"
                                    >
                                    <div><img src={`img/${image.src}`}/></div>                                                
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default ProjectListDetail;