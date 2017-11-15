import React, { Component } from 'react';

class ProjectDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:''
        }
    }

    componentWillReceiveProps(nextProps, oldProps){

        //image a afficher
        if(nextProps.image.index == nextProps.currentImage){
            this.setState({
                status: 'c-projectScreen--active slideInRight'
            });
        }//image précédente
        else if(nextProps.image.index == this.props.currentImage){
            this.setState({
                status: 'c-projectScreen--prev slideOutLeft'
            });
        }
        else{
            this.setState({
                status:''
            })
        }

    }

    componentDidMount() {
    
        //afficher la première image
        if(this.props.image.index === this.props.currentImage){
            this.setState({
                status: 'c-projectScreen--active'
            });
        }else{

        }

    }

    render(){
        return(
            <li className={"c-projectScreen animated " + this.state.status}>
                <div className="c-img-project-wrapper" style={{backgroundImage : `url(../../img/${ this.props.image.src })`}}></div>
            </li>
        )
    }

}

export default ProjectDetailScreen;