import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';

class ProjectSlider extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            currentProject: 0
        }
    }

    componentWillReceiveProps(nextProps, oldProps){

        const { id } = nextProps.match.params;
        this.setState({currentProject:id});

    }

    selectProject(proj){
        this.setState({ currentProject: proj})
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