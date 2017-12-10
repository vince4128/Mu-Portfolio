import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions/index';

import ProjectAllViewer from '../components/ProjectAllViewer';
import ProjectDetailPagination from '../components/ProjectDetailPagination';
import ProjectDescription from '../components/ProjectDesc';
import Logo from '../components/logo';
import Menu from '../components/Menu';
import DetailButton from '../components/DetailButton';
import PrevNext from '../components/PrevNext';

class ProjectSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            currentProject: 0,
            projectsLength: [],
            currentBg: 0
        }

        this.selectProject = this.selectProject.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.overList = this.overList.bind(this);

    }

    selectProject(projectId) {
        this.props.history.push(`/projets/${projectId}`);
    }

    overList(id){
        //console.log("coucou" + id);
        //this.setState({currentBg : id});
        this.props.history.push(`/projets/${this.state.currentProject}/${id}`);
    }

    //preloader les images

    componentWillReceiveProps(nextProps, oldProps) {
        //alert('projectslider will receive new props');
        const { id } = nextProps.match.params;
        this.setState({ currentProject: id });
    }

    componentWillMount() {
        //alert('projectslider did mount');
        this.props.fetchProjects();
        const { id } = this.props.match.params;
        this.setState({ currentProject: id });
    }


    handleWheel(e) {

        //console.log(e.target.classList.value);

        if(e.target.classList.value === 'c-prevnext__next' || e.target.classList.value === 'c-prevnext__prev' || e.target.classList.value.toString().indexOf('fa-angle-left') !== -1 || e.target.classList.value.toString().indexOf('fa-angle-right') !== -1){
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

    }

    renderList() {

        return _.map(this.props.projects, project => {

            if (project[0]) {
                project = project[0]
            }

            this.state.projectsLength.push(project.images.length);

            return (
                <li key={project.id}>
                    {/*console.log('##projectSlider### ' + JSON.stringify(project) + "##projectsLength## " + this.state.projectsLength)*/}
                    <ProjectAllViewer
                        project={project}
                        currentProject={this.state.currentProject}
                        total={Object.keys(this.props.projects).length - 1}
                        background={this.state.currentBg}
                    />
                    <img style={{ display: 'none' }} src={`../mu/img/${project.images[0].src}`}/>
                    {/*console.log("### coucou ### " + project.images.length)*/}
                </li>
            );
        })
    }

    render() {

        var project = this.props.projects[this.state.currentProject];
        var description = project;

        //alert(JSON.stringify(project));

        //console.log(this.state.projectsLength[0]);
        return (
            <section className="no-scroll" onWheel={(e) => this.handleWheel(e)}>
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <Link to={`/projets/${this.state.currentProject}/1`}>
                    <DetailButton />
                </Link>
                <PrevNext
                    select={this.selectProject}
                    current={parseInt(this.state.currentProject)}
                    total={Object.keys(this.props.projects).length}
                />
                <Logo />
                <Menu />
                <ProjectDescription
                    project={project}
                />
                <ProjectDetailPagination
                    //select={this.overList}
                    current={0}
                    total={this.state.projectsLength[this.state.currentProject]}
                    project={project}
                />
            </section>
        );
    }

}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectSlider);