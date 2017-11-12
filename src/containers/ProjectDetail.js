import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailViewer from '../components/ProjectDetailViewer';

class ProjectDetail extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchProject(id);
    }

    render() {
        if (!this.props.project){
            return <div className="c-project-detail">Aucun projet selectionné</div>;
        }

        return (
            <section>
                <div className="c-project-detail">
                    <Link to="/projets/">
                        <a>Retour</a>
                    </Link>
                    <h3>Détail pour le projet : </h3>
                    <div>Titre : {this.props.project.title}</div>
                    <div>Description : {this.props.project.description}</div>
                </div>
                <ProjectDetailViewer 
                    images={this.props.project.images}
                    selectProject={this.selectProject}
                />
            </section>
        );
    }
}

function mapStateToProps({projects}, ownProps){
    return {
        project: projects[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchProject})(ProjectDetail);