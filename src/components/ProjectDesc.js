import React, { Component } from 'react';

class ProjectDesc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false
        }

        this.isOpened = this.isOpened.bind(this);
        this.toggleDesc = this.toggleDesc;
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

    render() {
        return(
            <div className={"c-project-description " + this.isOpened()}>
    
                <section className="c-project-description__toggle animated fadeInUp">
                    <span>
                        <button onClick={()=>this.toggleDesc()}>Afficher</button>
                    </span>
                </section>
    
                <section className="c-project-description__desc animated fadeInUp">
                    <span>
                        <button onClick={()=>this.toggleDesc()}>Masquer</button>
                        <h1>{this.props.project.title}</h1>
                        <h1>{this.props.project.category} - {this.props.project.year}</h1>
                        <p>{this.props.project.description}</p>
                        <hr/>
                        <p>Les liens</p>
                    </span>
                </section>
    
            </div>
        )
    }
    

}

export default ProjectDesc;