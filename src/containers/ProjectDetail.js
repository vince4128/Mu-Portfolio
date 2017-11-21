import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailScreen from '../components/ProjectDetailScreen';
import ProjectDetailPagination from '../components/ProjectDetailPagination';
import PrevNext from '../components/PrevNext';

class ProjectDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProject: 0,
            currentImage: 0
        }

        this.selectImageurl = this.selectImageurl.bind(this);
    }

    selectImageurl(imageId) {
        this.props.history.push(`/projets/${this.props.project.id}/${imageId}`);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { pid } = this.props.match.params;
        this.props.fetchProject(id);
        this.setState({ currentProject: id });
        this.setState({ currentImage: pid });
    }

    componentWillReceiveProps(nextProps, oldProps) {
        const { id } = nextProps.match.params;
        const { pid } = nextProps.match.params;
        this.setState({ currentProject: id });
        this.setState({ currentImage: pid });
    }

    renderList() {
        return _.map(this.props.project.images, image => {
            return (
                <ProjectDetailScreen
                    current={parseInt(this.state.currentImage)}
                    total={Object.keys(this.props.project.images).length - 1}
                    image={image}
                />
            );
        })
    }

    render() {
        if (!this.props.project) {
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
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <PrevNext
                    select={this.selectImageurl}
                    current={parseInt(this.state.currentImage)}
                    total={Object.keys(this.props.project.images).length}
                />
                <ProjectDetailPagination
                    select={this.selectImageurl}
                    current={parseInt(this.state.currentImage)}
                    total={Object.keys(this.props.project.images).length}
                />
            </section>
        );
    }
}

function mapStateToProps({ projects }, ownProps) {
    return {
        project: projects[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchProject })(ProjectDetail);