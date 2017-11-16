import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';
import DetailButton from '../components/DetailButton';
import PrevNext from '../components/PrevNext';

class ProjectSlider extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            currentProject: 0,
            //totalProject:4
        }

        this.selectProject = this.selectProject.bind(this);

    }

    selectProject(projectId){
        this.props.history.push(`/projets/${projectId}`);
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
                {<PrevNext
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    total={Object.keys(this.props.projects).length}
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
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <Link to={`/projets/${this.state.currentProject}/0`}>
                    <DetailButton/>
                </Link>
            </section>
        );
    }

}

function mapStateToProps(state){
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectSlider);