import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailScreen from '../components/ProjectDetailScreen';
import ProjectDetailPagination from '../components/ProjectDetailPagination';
import Logo from '../components/logo';
import Menu from '../components/Menu';
import Retour from '../components/Retour';
import PrevNext from '../components/PrevNext';
import ProjectDescription from '../components/ProjectDesc';
import ProjectName from '../components/ProjectName';

class ProjectDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProject: 0,
            currentImage: 0
        }

        this.selectImageurl = this.selectImageurl.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
    }

    selectImageurl(imageId) {
        this.props.history.push(`/projets/${this.props.project.id}/${imageId}`);
    }

    handleWheel(e) {

        if (e.deltaY < 0) {
            if (this.state.currentImage < Object.keys(this.props.project.images).length - 1) {
                this.selectImageurl(parseInt(this.state.currentImage) + 1);
            } else {
                this.selectImageurl(0);
            }
        } else if (e.deltaY > 0) {
            if (this.state.currentImage > 0) {
                this.selectImageurl(parseInt(this.state.currentImage) - 1);
            } else {
                this.selectImageurl(Object.keys(this.props.project.images).length - 1);
            }
        }

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
                <span>
                    <ProjectDetailScreen
                        current={parseInt(this.state.currentImage)}
                        total={Object.keys(this.props.project.images).length - 1}
                        image={image}
                    />
                    {/*prechargement*/}
                    {/*<img style={{ display: 'none' }} src={`../../img/${image.src}`}/>*/}
                </span>
            );
        })
    }

    render() {

        let preload = null;

        //preloading
        let nextProject = null;
        let prevProject = null;

        if(parseInt(this.state.currentImage) === 0){
            nextProject = this.props.project.images[1];
            prevProject = this.props.project.images[Object.keys(this.props.project.images).length - 1];
        }else if(parseInt(this.state.currentImage) === Object.keys(this.props.project.images).length - 1){
            nextProject = this.props.project.images[0];
            prevProject = this.props.project.images[parseInt(this.state.currentImage)-1];
        }else{
            nextProject = this.props.project.images[parseInt(this.state.currentImage)+1];
            prevProject = this.props.project.images[parseInt(this.state.currentImage)-1];
        }

        if(nextProject){
            preload = <span style={{ display:'none' }}><img src={`../img/${nextProject.src}`}/><img src={`../img/${prevProject.src}`}/></span>
        }else{
            preload = "";
        }

        if (!this.props.project) {
            return <div className="c-project-detail">Aucun projet selectionné</div>;
        }

        return (
            <section onWheel={(e) => this.handleWheel(e)}>
                {/*<div className="c-project-detail">
                    <Link to={`/projets/${this.props.project.id}`}>
                        <span className="c-project-detail__retour animated fadeInLeft"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;Retour</span>
                    </Link>
        </div>*/}
                <ul className="main-cont no-overflow">
                    {this.renderList()}
                </ul>
                {/*<Menu parent={`/projets/${this.props.project.id}/`}/>*/}
                {/*<ProjectDescription project={this.props.project}/>*/}
                <PrevNext
                    select={this.selectImageurl}
                    current={parseInt(this.state.currentImage)}
                    total={Object.keys(this.props.project.images).length}
                />
                <nav className="nav-wrapper">
                <Retour parent={`/projets/${this.props.project.id}`} />
                <ProjectName/>
                <ProjectDetailPagination
                    select={this.selectImageurl}
                    current={parseInt(this.state.currentImage)}
                    total={Object.keys(this.props.project.images).length}
                    project={this.props.project}
                    preview={false}
                />
                </nav>
                {/*prechargement*/}
                {preload};
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