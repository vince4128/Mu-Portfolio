import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';

class ProjectSlider extends Component {

    selectProject(proj){
        this.setState({ currentProject: proj})
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    renderList() {
        return _.map(this.props.projects, project => {
            return (
                <li
                    key={project.id}
                    //onClick={() => this.props.selectProject(project)}
                    className="c-project-list__item">
                    {project.title}
                    <Link to={`/projets/${project.id}/detail`} >
                        voir
                    </Link>
                    <ProjectAllViewer project={project}/>
                </li>
            );
        })
    }

    render(){
        console.log(this.props.projects);
        return(
            <section>
                <h3>Project Slider</h3>
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