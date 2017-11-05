import React, { Component } from 'react';
import { connect } from 'react-redux';

//import ProjectViewer from '../components/ProjectViewer';
import ProjectDetailViewer from '../components/ProjectDetailViewer';

class ProjectDetail extends Component {
    render() {
        if (!this.props.project){
            return <div className="c-project-detail">Aucun projet selectionné</div>;
        }

        return (
            <section>
            <div className="c-project-detail">
                <h3>Détail pour le projet : </h3>
                <div>Titre : {this.props.project.title}</div>
                <div>Description : {this.props.project.description}</div>
            </div>
            <ProjectDetailViewer images={this.props.project.images}/>
            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        project: state.activeProject
    }
}

export default connect(mapStateToProps)(ProjectDetail);