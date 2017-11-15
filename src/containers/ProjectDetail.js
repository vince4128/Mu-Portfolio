import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailViewer from '../components/ProjectDetailViewer';
import ProjectDetailScreen from '../components/ProjectDetailScreen';
import PrevNext from '../components/PrevNext';

class ProjectDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentProject:0,
            currentImage:0,
            totalImages:4
        }

        this.selectImageurl = this.selectImageurl.bind(this);
    }

    selectImageurl(imageId){
        this.props.history.push(`/projets/${this.props.project.id}/${imageId}`);
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        const { pid } = this.props.match.params;
        this.props.fetchProject(id);
        this.setState({ currentProject:id });
        this.setState({ currentImage:pid });
    }

    componentWillReceiveProps(nextProps, oldProps){
        const { id } = nextProps.match.params;
        const { pid } = nextProps.match.params;
        this.setState({ currentProject:id });
        this.setState({ currentImage:pid });
    }

    renderList(){
        return _.map(this.props.project.images, image => {
            return (
                <li key={image.index}>
                <ProjectDetailScreen 
                    currentImage={parseInt(this.state.currentImage)}
                    totalImages={this.state.totalImages}
                    //selectImage={this.selectImage}
                    image={image}
                />
                {/*<PrevNext
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    total={this.state.totalProject}
                    obj={this.props.projects}
                />*/}
                </li>
            );
        })
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
                {/*<ProjectDetailViewer 
                    images={this.props.project.images}
                    current={parseInt}
                    select={this.selectImageurl}
                />*/}
                {/*<ProjectDetailScreen 
                    currentImage={parseInt(this.state.currentImage)}
                    totalImages={this.state.totalImages}
                    //selectImage={this.selectImage}
                    image={this.props.project.images[this.state.currentImage]}
                />*/}
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <PrevNext
                    select={this.selectImageurl}
                    current={parseInt(this.state.currentImage)}
                    total={this.state.totalImages}
                    obj={this.props.project.images}
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