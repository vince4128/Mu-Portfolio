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
    
                <section className="c-project-description__toggle animated fadeInUp">
                    <span>
                        <button onClick={()=>this.toggleDesc()}>Afficher</button>
                        <p>coucou : {(JSON.stringify(this.props.project.description))}</p>
                    </span>
                </section>
    
                <section className="c-project-description__desc animated fadeInUp">
                    <span>
                        {/*<button onClick={()=>this.toggleDesc()}>Masquer</button>
                        <h1>{this.props.project.title}</h1>
                        <h1>{this.props.project.category} - {this.props.project.year}</h1>
                        <p>{this.props.project.description}</p>
                        <hr/>
        <p>Les liens</p>*/}
                    </span>
                </section>
    
            </div>
        )
    }
    

}

export default ProjectDesc;