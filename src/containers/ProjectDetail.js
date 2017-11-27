import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/index';

import ProjectDetailScreen from '../components/ProjectDetailScreen';
import ProjectDetailPagination from '../components/ProjectDetailPagination';
import Logo from '../components/logo';
import Menu from '../components/Menu';
import PrevNext from '../components/PrevNext';
import ProjectDescription from '../components/ProjectDesc';

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
        //alert("ProjectDetail DidMount");
        const { id } = this.props.match.params;
        const { pid } = this.props.match.params;
        this.props.fetchProject(id);
        this.setState({ currentProject: id });
        this.setState({ currentImage: pid });
    }

    componentWillReceiveProps(nextProps, oldProps) {
        //alert("ProjectDetail WillReceiveProps");
        const { id } = nextProps.match.params;
        const { pid } = nextProps.match.params;
        this.setState({ currentProject: id });
        this.setState({ currentImage: pid });
    }

    componentDidUpdate(){
        alert('update');
    }

    componentWillMount(){
        alert('will mount');
        const { id } = this.props.match.params;
        this.setState({currentProject:id});
        this.props.fetchProject(id);
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
                    <img style={{ display: 'none' }} src={`../../img/${image.src}`}/>
                </span>
            );
        })
    }

    render() {
        if (!this.props.project) {
            return <div className="c-project-detail">Aucun projet selectionné</div>;
        }

        return (
            <section onWheel={(e) => this.handleWheel(e)}>
                <div className="c-project-detail">
                    <Link to={`/projets/${this.props.project.id}`}>
                        <button className="animated fadeInUp">Retour total</button>
                    </Link>
                </div>
                <ul className="no-overflow">
                    {this.renderList()}
                </ul>
                <Logo />
                <Menu />
                <ProjectDescription project={this.props.project}/>
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