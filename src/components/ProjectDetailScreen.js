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
        } else {

        }

        this.setState({ isAnimated: true });

    }

    render() {
        return (
            <li key={this.props.id} className={"c-projectScreen animated " + this.state.status}>
                <div className="c-img-project-wrapper" style={{ backgroundImage: `url(../../img/${this.props.image.src})` }}></div>
            </li>
        )
    }

}

export default ProjectDetailScreen;