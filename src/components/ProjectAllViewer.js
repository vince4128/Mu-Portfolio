import React, { Component } from 'react';

class ProjectAllViewer extends Component {

    constructor(props){
        super(props);

        this.state = {
            status:''
        }
    }

    componentWillReceiveProps(nextProps, oldProps){
        /*
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
        */
    }

    componentWillMount() {
    
        //afficher la première image
        /*if(this.props.image.index === this.props.currentImage){
            this.setState({
                status: 'c-projectScreen--active'
            });
        }*/

    }

    render(){
        return(
            <li>
                <img src={"/img/"+this.props.image}/>
                {/*<img src="/img/img4.jpg"/>*/}
                ProjectAllViewer
            </li>
        )
    }

}

export default ProjectAllViewer;