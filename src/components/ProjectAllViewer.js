import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectDetailPagination from './ProjectDetailPagination';

class ProjectAllViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            titleStatus: '',
            isAnimated: false
        }
    }

    componentWillUnmount() {
        this.setState({ isAnimated: false });
    }

    componentWillReceiveProps(nextProps, oldProps) {

        //projet a afficher
        if (nextProps.project.id == nextProps.currentProject) {
            //est-ce une vidéo ? faut-il la lancer ?
            if(nextProps.project.images[0].video){
                this.refs.vidRef.play();
            }
            //animation ?
            if (this.state.isAnimated) {
                this.setState({
                    titleStatus: 'animated fadeIn'
                });
                //sens de l'animation
                if ((parseInt(nextProps.project.id) > parseInt(this.props.currentProject) || (this.props.currentProject == this.props.total && nextProps.currentProject == 0)) && !(this.props.currentProject == 0 && nextProps.currentProject == this.props.total)) {
                    this.setState({
                        status: 'c-projectScreen--active slideInRight'
                    });
                } else {
                    this.setState({
                        status: 'c-projectScreen--active slideInLeft'
                    });
                }

            } else {
                this.setState({
                    status: 'c-projectScreen--active'
                })
            }

        }//projet a faire défiler
        else if (nextProps.project.id == this.props.currentProject) {

            //est-ce une vidéo ? faut-il la stopper ?
            if(this.props.project.images[0].video){
                this.refs.vidRef.pause();                
                //alert('stopper la vidéo');
            }

            this.setState({
                titleStatus: 'animated fadeOut'
            });
            if (this.state.isAnimated) {
                //sens de l'animation
                if ((parseInt(nextProps.currentProject) >parseInt(this.props.currentProject) || (this.props.currentProject == this.props.total && nextProps.currentProject == 0)) && !(this.props.currentProject == 0 && nextProps.currentProject == this.props.total)) {
                    this.setState({
                        status: 'c-projectScreen--prev slideOutLeft'
                    });
                } else {
                    this.setState({
                        status: 'c-projectScreen--prev slideOutRight'
                    });
                }

            } else {
                this.setState({
                    status: ''
                })
            }

        }//projet a masquer
        else {
            this.setState({
                status: ''
            });
            this.setState({
                titleStatus: ''
            });
        }

        this.setState({ isAnimated: true });

    }

    componentDidMount() {

        //afficher le premier projet
        if (this.props.project.id == this.props.currentProject) {
            this.setState({
                status: 'c-projectScreen--active',
            });
            //est-ce une vidéo ? faut-il la lancer ?
            if(this.props.project.images[0].video){
                this.refs.vidRef.play();
            }
        }

        this.setState({ isAnimated: true });
    }

    render() {
        //alert(JSON.stringify(this.props.project));
        {/*conditionner l'affichage image / video*/}
        if(this.props.project.images[this.props.background].video){

            return (
                <div
                    className={"c-projectScreen animated " + this.state.status}
                >
                        <video ref="vidRef" class="c-projectScreen__video">
                            <source src={`video/${this.props.project.images[this.props.background].src}.mp4`} type="video/mp4"/>
                            <source src={`video/${this.props.project.images[this.props.background].src}.ogg`} type="video/ogg"/>
                            <source src={`video/${this.props.project.images[this.props.background].src}.webm`} type="video/webm"/>
                            Your browser does not support the video tag.
                        </video>
                </div>
            )

        }else{

            return (
                <div
                    className={"c-projectScreen animated " + this.state.status}
                >
                    <div className="c-img-project-wrapper" style={{ backgroundImage: `url(../mu/img/${this.props.project.images[this.props.background].src})` }}></div>
                </div>
            )

        }
        
    }

}

export default ProjectAllViewer;