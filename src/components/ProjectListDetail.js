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
            <div>
                <h1>Coucou</h1>
            </div>
        )
    }

}

export default ProjectListDetail;