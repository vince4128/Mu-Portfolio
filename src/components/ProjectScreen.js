import React, { Component } from 'react';

class ProjectScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            status: ''
        }

    }

    componentWillReceiveProps(nextProps, oldProps){

        //projet en cours
        if(nextProps.projet.id === nextProps.projectSelect){
            this.setState({
                status: 'c-projectScreen--active slideInRight'
            });
        //projet precedent
        }else if(nextProps.projet.id === this.props.projectSelect){
            this.setState({
                status: 'c-projectScreen--prev slideOutLeft'
            });
        }
        else{
            this.setState({
                status:''
            });
        }
        
    }

    render(){
        return(
            <li className={"c-projectScreen animated " + this.state.status} onClick={()=>this.props.onProjectSelect(this.props.projet.id)}>
                <p>projet : {this.props.projet.projet}</p>
            </li>
        )
    }

}

export default ProjectScreen;
