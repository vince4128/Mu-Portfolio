import React, { Component } from 'react';

class ProjectDesc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false
        }

        this.isOpened = this.isOpened.bind(this);
        this.toggleDesc = this.toggleDesc.bind(this);
    }

    static defaultProps = {
        project: {
            description:""
        }
    }

    toggleDesc(){
        this.setState({open : !this.state.open})
    }

    isOpened(){
        if(this.state.open){
            return"c-project-description--open";
        }else{
            return"c-project-description--close";
        }
    }

    componentDidMount() {
        //alert('desc did mount ' + JSON.stringify(this.props));
    }

    render() {

        //alert("description " + JSON.stringify(this.props.project));

        if(!this.props.project.description) return null;

        return(

            <div className={"c-project-description " + this.isOpened()}>
    
                <section onClick={()=>this.toggleDesc()} className="c-project-description__toggle animated fadeIn">
                    <div className={"c-projectName"}>
                        <h1><strong>{this.props.project.title}</strong></h1>
                        <h2>{this.props.project.category} - {this.props.project.year}</h2>
                    </div>
                </section>
    
                <section className="c-project-description__desc animated fadeInUp">
                    <span>
                        <i className="c-project-description__btn--close fa fa-2x fa-times" aria-hidden="true" onClick={()=>this.toggleDesc()}></i>
                        <h1 class="c-project-description--title">{this.props.project.title}</h1>
                        <p class="c-project-description--category">{this.props.project.category} - {this.props.project.year}</p>
                        <p class="c-project-description--text">{this.props.project.description}</p>
                        <hr/>
                        {/*<p>Les liens</p>*/}
                    </span>
                </section>
    
            </div>
        )
    }
    

}

export default ProjectDesc;