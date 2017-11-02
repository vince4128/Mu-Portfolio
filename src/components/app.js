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
    },
    {
        projet: "projet3",
        desc: "Description du projet",
        img: "img3",
        id: 2
    },
    {
        projet: "projet4",
        desc: "Description du projet",
        img: "img4",
        id: 3
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
                    projectSelected={this.state.selectedProject}
                    totalProject={this.state.totalProject} 
                />
                <p>selectedProject : {this.state.selectedProject}</p>
                <ul className="c-projectPagination">
                    <ProjectPagination 
                        projectSelected={this.state.selectedProject}
                        totalProject={this.state.totalProject}
                        onProjectSelect={selectedProject => this.setState({selectedProject})}//update app state
                    />
                </ul>
            </section>
        );
    }
}

export default App;