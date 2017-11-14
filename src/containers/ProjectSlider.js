import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';
import PrevNext from '../components/PrevNext';

class ProjectSlider extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            currentProject: 0,
            totalProject: 4
        }

        this.selectProject = this.selectProject.bind(this);
        this.test = this.test.bind(this);

    }

    selectProject(projectId){
        this.props.history.push(`/projets/${projectId}`);
    }

    test(){
        this.props.history.push("/projets")
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
                <button onClick={()=>this.test()}>test</button>
                <ProjectAllViewer 
                    project={project}
                    currentProject={this.state.currentProject}
                />
                {<PrevNext
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    total={this.state.totalProject}
                    obj={this.props.projects}
                />}
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