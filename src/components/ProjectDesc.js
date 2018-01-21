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

            <span>
    
                <span onClick={()=>this.toggleDesc()} className="c-project-description__toggle animated fadeIn">
                    <span className={"c-projectName"}>
                        {this.props.project.title} {this.props.project.category} - {this.props.project.year}
                    </span>
                </span>

                <div className={"c-project-description " + this.isOpened()}>
    
                    <section className="c-project-description__desc animated fadeInUp">
                    <p><i className="c-project-description__btn--close fa fa-2x fa-times" aria-hidden="true" onClick={()=>this.toggleDesc()}></i></p>
                        <span>
                            <h4>{this.props.project.title} — <span class="c-project-description--category">{this.props.project.category} - {this.props.project.year}</span>
                            </h4>
                            <hr/>
                            {/*<p class="c-project-description--category">— {this.props.project.category} - {this.props.project.year}</p>*/}
                            <p class="c-project-description--text">{this.props.project.description}</p>
                            {/*<p>Les liens</p>*/}
                        </span>
                    </section>

                </div>
    
            </span>
        )
    }
    

}

export default ProjectDesc;