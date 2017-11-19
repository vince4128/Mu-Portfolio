import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

class ProjectList extends Component {

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
                    <Link to={`/projets/${project.id}`} >
                        voir
                    </Link>
                </li>
            );
        })
    }

    render(){
        console.log(this.props.projects);
        return(
            <ul className="c-project-list">
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectList);