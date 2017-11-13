import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';
import PrevNext from '../components/PrevNext';

class ProjectSlider extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            currentProject: 0,
            totalProject: this.props.projects.length
        }

        this.selectProject = this.selectProject.bind(this);

    }

    selectProject(projectId){
        this.setState({ currentProject: projectId });
    }

    componentWillReceiveProps(nextProps, oldProps){
        const { id } = nextProps.match.params;
        this.setState({currentProject:id});
    }

    componentDidMount(){
        this.props.fetchProjects();
        const { id } = this.props.match.params;
        this.setState({currentProject:id});
    }

    renderList() {
        return _.map(this.props.projects, project => {
            return (
                <li key={project.id}>
                <ProjectAllViewer 
                    project={project}
                    currentProject={this.state.currentProject}
                />
                {/*<PrevNext
                    selectImage={this.selectProject}
                    currentImage={this.state.currentProject}
                    totalImages={this.state.totalImages}
                />*/}
                </li>
            );
        })
    }

    render(){
        console.log(this.props.projects);
        return(
            <section>
                <h3>Project Slider</h3>
                <p>{JSON.stringify(this.props)}</p>
                <ul>
                    {this.renderList()}
                </ul>
            </section>
        );
    }

}

function mapStateToProps(state){
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectSlider);