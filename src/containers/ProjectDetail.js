import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailViewer from '../components/ProjectDetailViewer';

class ProjectDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            pid:0
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchProject(id);
        const { pid } = this.props.match.params;
        this.setState({ pid });
        alert(this.state.pid);
    }

    componentWillReceiveProps(nextProps, oldProps){
        const { pid } = nextProps.match.params;
        this.setState({pid});
        alert(this.state.pid);
    }

    render() {
        if (!this.props.project){
            return <div className="c-project-detail">Aucun projet selectionné</div>;
        }

        return (
            <section>
                <div className="c-project-detail">
                    <Link to={`/projets/${this.props.project.id}`}>
                        <a>Retour</a>
                    </Link>
                    <h3>Détail pour le projet : </h3>
                    <div>Titre : {this.props.project.title}</div>
                    <div>Description : {this.props.project.description}</div>
                </div>
                <ProjectDetailViewer 
                    images={this.props.project.images}
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