import React, { Component } from 'react';

import ProjectViewer from './ProjectViewer';
import ProjectPagination from './ProjectPagination';

const fakeProject = [
    {
        projet: "projet1",
        desc: "Description du projet",
        img: "img1",
        id: 0
    },
    {
        projet: "projet2",
        desc: "Description du projet",
        img: "img2",
        id: 1
    }
];

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selectedProject: null,
            totalProject: fakeProject.length
        };
    }

    render() {
        return (
            <section>
                <ProjectViewer 
                    projets={fakeProject}
                    onProjectSelect={selectedProject => this.setState({selectedProject})}//update app state 
                />
                <p>selectedProject : {this.state.selectedProject}</p>
                <ul>
                    <ProjectPagination 
                        projectSelected={this.state.selectedProject}
                        totalProject={this.state.totalProject}
                    />
                </ul>
            </section>
        );
    }
}

export default App;