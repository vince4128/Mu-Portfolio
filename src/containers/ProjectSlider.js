import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';
import ProjectDetailPagination from '../components/ProjectDetailPagination';
import Logo from '../components/logo';
import Menu from '../components/Menu';
import DetailButton from '../components/DetailButton';
import PrevNext from '../components/PrevNext';

class ProjectSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            currentProject: 0
        }

        this.selectProject = this.selectProject.bind(this);
        this.handleWheel = this.handleWheel.bind(this);

    }

    selectProject(projectId) {
        this.props.history.push(`/projets/${projectId}`);
    }

    //preloader les images

    componentWillReceiveProps(nextProps, oldProps) {
        const { id } = nextProps.match.params;
        this.setState({ currentProject: id });
    }

    componentDidMount() {
        this.props.fetchProjects();
        const { id } = this.props.match.params;
        this.setState({ currentProject: id });
    }


    handleWheel(e) {

        if (e.deltaY < 0) {
            if (this.state.currentProject < Object.keys(this.props.projects).length - 1) {
                this.selectProject(parseInt(this.state.currentProject) + 1);
            } else {
                this.selectProject(0);
            }
        } else if (e.deltaY > 0) {
            if (this.state.currentProject > 0) {
                this.selectProject(parseInt(this.state.currentProject) - 1);
            } else {
                this.selectProject(Object.keys(this.props.projects).length - 1);
            }
        }

    }

    renderList() {
        return _.map(this.props.projects, project => {

            if (project[0]) {
                project = project[0]
            }

            return (
                <li key={project.id}>
                    {console.log('##projectSlider### ' + JSON.stringify(project))}
                    <ProjectAllViewer
                        project={project}
                        currentProject={this.state.currentProject}
                        total={Object.keys(this.props.projects).length - 1}
                    />
                    <img style={{ display: 'none' }} src={`../mu/img/${project.images[0].src}`}/>
                </li>
            );
        })
    }

    render() {
        console.log(this.props.projects);
        return (
            <section className="no-scroll" onWheel={(e) => this.handleWheel(e)}>
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <Link to={`/projets/${this.state.currentProject}/0`}>
                    <DetailButton />
                </Link>
                <PrevNext
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    total={Object.keys(this.props.projects).length}
                />
                <Logo />
                <Menu />
                {<ProjectDetailPagination
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    //total={Object.keys(this.props.projects).length}
                    total={Object.keys(this.props.projects).length}
                />}
            </section>
        );
    }

}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectSlider);