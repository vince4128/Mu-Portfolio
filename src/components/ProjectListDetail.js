import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <ul style={{ width:`${ulWidth*340}px` }}>
                    {
                        _.map(this.props.images, image => {
                            return (
                                <li
                                    key={image.index}
                                    className="c-project-list__detail__image"
                                    >
                                    <div>
                                        <Link to={`projets/${this.props.id}/${image.index}`}>
                                        <img src={`img/${(image.src).slice(0,-4)}_sm.jpg`}/>
                                        </Link>
                                    </div>                                                
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