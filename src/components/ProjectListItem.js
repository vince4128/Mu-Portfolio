import React, { Component } from 'react';

import ProjectListDetail from './ProjectListDetail';

class ProjectListItem extends Component{

    constructor(props) {
        super(props);

        this.state = {
            status: 'close',
            open:false
        }
        this.toggleDesc = this.toggleDesc.bind(this);
        this.isOpened = this.isOpened.bind(this);
        this.rawDesc = this.rawDesc.bind(this);
    }

    isOpened(){
        if(this.state.open){
            return"c-project-list__detail--open animated fadeIn";
        }else{
            return"c-project-list__detail--close";
        }
    }

    toggleDesc(){
        this.setState({open : !this.state.open})
    }

    rawDesc(){
        let rawDesc = this.props.project.shortdescription;
        return { __html: rawDesc };
    }

    render(){
        return (
            <li>
                <span
                    key={this.props.project.id}
                    className="c-project-list__item"
                    onClick={()=>this.toggleDesc()}                
                >
                    <span className="c-project-list__item--line"></span>
                    <span className="c-project-list__item--point">•</span>
                    <article className="c-project-list__item__cell c-project-list__year">{this.props.project.year}</article>
                    <article className="c-project-list__item__cell c-project-list__title"><strong>{this.props.project.title}</strong></article>
                    <article key={this.props.project.id} className="c-project-list__item__cell c-project-list__description" dangerouslySetInnerHTML={this.rawDesc()} />
                    <span className="c-project-list__item--bottom-line"></span>
                </span>
                <span className={"c-project-list__detail " + this.isOpened()}>
                <ProjectListDetail id={this.props.project.id} images={this.props.project.images} open={this.state.open}/>
                </span>
            </li>
        )
    }

}

export default ProjectListItem;