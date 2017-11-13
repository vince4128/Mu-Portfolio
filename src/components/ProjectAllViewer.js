import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectAllViewer extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:''
        }
    }

    componentWillReceiveProps(nextProps, oldProps){

        //projet a afficher
        if(nextProps.project.id == nextProps.currentProject){
            //alert("nouvel slide !");
            this.setState({
                status: 'c-projectScreen--active slideInRight'
            });
        }//projet a faire défiler
        else if(nextProps.project.id == this.props.currentProject){
            this.setState({
                status: 'c-projectScreen--prev slideOutLeft'
            });
        }//projet a masquer
        else{
            this.setState({
                status: ''
            })
        }

    }

    componentWillMount() {

        //afficher le premier projet
        if(this.props.project.id == this.props.currentProject){
            this.setState({
                status: 'c-projectScreen--active'
            });
        }
    }

    render(){
        return(
            <div
                className={"c-projectScreen animated " + this.state.status}
            >                
                ProjectAllViewer
                {this.props.project.title}
                {JSON.stringify(this.props)}
                <img src={"/img/"+this.props.project.images[0].src}/>
                <Link to={`/projets/${this.props.project.id}/detail`}>
                    detail
                </Link>
                <Link to={`/projets/0`}>
                    0
                </Link>
                <Link to={`/projets/1`}>
                    1
                </Link>
                <Link to={`/projets/2`}>
                    2
                </Link>
                <Link to={`/projets/3`}>
                    3
                </Link>
            </div>
        )
    }

}

export default ProjectAllViewer;