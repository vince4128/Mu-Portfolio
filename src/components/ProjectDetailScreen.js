import React, { Component } from 'react';

class ProjectDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:'',
            isAnimated: false
        }
    }

    componentWillReceiveProps(nextProps, oldProps){
        //image a afficher        
        if(nextProps.image.index == nextProps.currentImage){
            //animation ?
            if(this.state.isAnimated){
                this.setState({
                    status: 'c-projectScreen--active slideInRight'
                });
            }else{
                this.setState({
                    status: 'c-projectScreen--active'
                });
            }            
        }//image précédente
        else if(nextProps.image.index == this.props.currentImage){
            if(this.state.isAnimated){
                this.setState({
                    status: 'c-projectScreen--prev slideOutLeft'
                });
            }else{
                this.setState({
                    status:''
                })
            }
            
        }
        else{
            this.setState({
                status:''
            })
        }

        this.setState({isAnimated : true});

    }

    componentDidMount() {
    
        //afficher la première image
        if(this.props.image.index === this.props.currentImage){
            this.setState({
                status: 'c-projectScreen--active'
            });
        }else{

        }

        this.setState({isAnimated : true});

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