import React, { Component } from 'react';

class ProjectDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:''
        }
    }

    componentWillReceiveProps(nextProps, oldProps){

        //image actuellement affichée
        if(nextProps.image.index === nextProps.currentImage){
            this.setState({
                status: 'c-projectScreen--active slideInRight'
            });
        }//image précédente
        else if(nextProps.image.index === this.props.currentImage){
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

    render(){
        return(
            <li className={"c-projectScreen animated " + this.state.status}>
                <img src={"img/"+this.props.image.src}/>
            </li>
        )
    }

}

export default ProjectDetailScreen;