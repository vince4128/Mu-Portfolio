import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';

//import ProjectDetail from 'ProjectDetail';

class ProjectSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProject: 0,
            totalProjects: this.props.projects.length
        };

        this.selectProject = this.selectProject.bind(this);

    };

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
                    {/*<ProjectAllViewer image={project.images[0].src}/>*/}
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