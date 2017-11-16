import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectAllViewer extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            isAnimated: false
        }
    }

    /*componentDidUpdate() {
        alert('update !');
    }*/

    componentWillUnmount() {
        this.setState({isAnimated : false});
    }

    componentWillReceiveProps(nextProps, oldProps){

        //a ajouter :
        //si il y a un projet a ajouter mais pas de projet a enlever
        //ne pas animer ?

        //projet a afficher
        if(nextProps.project.id == nextProps.currentProject){
            //animation ?
            if(this.state.isAnimated){
                this.setState({
                    status: 'c-projectScreen--active slideInRight'
                });
            } else {
                this.setState({
                    status: 'c-projectScreen--active'
                })
            }
            
        }//projet a faire défiler
        else if(nextProps.project.id == this.props.currentProject){
            if(this.state.isAnimated){
                this.setState({
                    status: 'c-projectScreen--prev slideOutLeft'
                });
            } else {
                this.setState({
                    status: ''
                })
            }
            
        }//projet a masquer
        else{
            this.setState({
                status: ''
            })
        }

        this.setState({isAnimated : true});

    }

    componentDidMount() {

        //afficher le premier projet
        if(this.props.project.id == this.props.currentProject){
            this.setState({
                status: 'c-projectScreen--active',
            });
        }

        this.setState({isAnimated : true});
    }

    render(){
        return(
            <div
                className={"c-projectScreen animated " + this.state.status}
            >                
                <div className="c-img-project-wrapper" style={{backgroundImage : `url(../img/${ this.props.project.images[0].src })`}}></div>
            </div>
        )
    }

}

export default ProjectAllViewer;