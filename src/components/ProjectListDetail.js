import React, { Component } from 'react';

class ProjectListDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: 'close',
        }
    }

    makeImageList(){
        return '';
    }

    //collapsible component
    render(){
        return(
            <div class="c-project-list__detail">
                <ul>
                    {
                        _.map(this.props.images, image => {
                            return (
                                <li
                                    key={image.index}
                                    className="c-project-list__detail__image"
                                    >
                                    {/*<img src={`img/${image.src}`}/>*/}
                                </li>
                            )
                        })
                    }
                    <li>
                    </li>
                </ul>
            </div>
        )
    }

}

export default ProjectListDetail;