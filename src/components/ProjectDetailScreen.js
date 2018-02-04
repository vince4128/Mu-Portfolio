import React, { Component } from 'react';

class ProjectDetailScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: '',
            isAnimated: false
        }
    }

    componentWillReceiveProps(nextProps, oldProps) {

        //image a afficher        
        if (nextProps.image.index == nextProps.current) {
            //est-ce une vidéo ? faut-il la lancer ?
            if(nextProps.image.video){
                this.refs.vidRef.play();
            }
            //animation ?
            if (this.state.isAnimated) {
                //sens de l'animation
                if ((nextProps.image.index > this.props.current || (this.props.current == nextProps.total && nextProps.current == 0)) && !(this.props.current == 0 && nextProps.current == nextProps.total)) {

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
                });
            }
        }//image précédente
        else if (nextProps.image.index == this.props.current) {

            //est-ce une vidéo ? faut-il la stopper ?
            if(nextProps.image.video){
                this.refs.vidRef.pause();
            }

            if (this.state.isAnimated) {
                //sens de l'animation
                if ((nextProps.current > this.props.current || (this.props.current == nextProps.total && nextProps.current == 0)) && !(this.props.current == 0 && nextProps.current == nextProps.total)) {

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

        }
        else {
            this.setState({
                status: ''
            })
        }

        this.setState({ isAnimated: true });

    }

    componentDidMount() {

        //afficher la première image
        if (this.props.image.index === this.props.current) {
            this.setState({
                status: 'c-projectScreen--active'
            });
            //est-ce une vidéo ? faut-il la lancer ?
            if(this.props.image.video){
                this.refs.vidRef.play();
            }
        } else {

        }

        this.setState({ isAnimated: true });

    }

    render() {
        {/*conditionner l'affichage image / video*/}
        if(this.props.image.video){
            return (
                <li key={this.props.id} className={"c-projectScreen animated " + this.state.status}>
                    <h1>VIDEO</h1>
                    <video ref="vidRef" class="c-projectScreen__video">
                            <source src={`video/${this.props.image.src}.mp4`} type="video/mp4"/>
                            <source src={`video/${this.props.image.src}.ogg`} type="video/ogg"/>
                            <source src={`video/${this.props.image.src}.webm`} type="video/webm"/>
                            Your browser does not support the video tag.
                        </video>
                </li>
            )
        }else{        
            return (
                <li key={this.props.id} className={"c-projectScreen animated " + this.state.status}>
                    <div className="c-img-project-wrapper" style={{ backgroundImage: `url(../../img/${this.props.image.src})` }}></div>
                </li>
            )
        }
    }

}

export default ProjectDetailScreen;