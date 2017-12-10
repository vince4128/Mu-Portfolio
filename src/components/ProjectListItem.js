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
    }

    isOpened(){
        if(this.state.open){
            return"c-project-list__detail--open";
        }else{
            return"c-project-list__detail--close";
        }
    }

    toggleDesc(){
        this.setState({open : !this.state.open})
    }

    render(){
        return (
            <span key={this.props.project.id}>
                <li
                    className="c-project-list__item"
                    onClick={()=>this.toggleDesc()}                
                >
                    <span className="c-project-list__item--line"></span>
                    <span className="c-project-list__item--point">•</span>
                    <article className="c-project-list__item__cell c-project-list__year">{this.props.project.year}</article>
                    <article className="c-project-list__item__cell c-project-list__title"><strong>{this.props.project.title}</strong></article>
                    <article className="c-project-list__item__cell c-project-list__description">{this.props.project.description}</article>
                </li>
                <span className={"c-project-list__detail " + this.isOpened()}>
                <ProjectListDetail images={this.props.project.images} open={this.state.open}/>
                </span>
            </span>
        )
    }

}

export default ProjectListItem;