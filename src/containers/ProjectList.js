import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategory } from '../actions/index';

import ProjectListDetail from '../components/ProjectListDetail';

class ProjectList extends Component {

    constructor(props){
        super(props);

        this.renderCategoryList = this.renderCategoryList.bind(this);
        this.renderProjectList = this.renderProjectList.bind(this);
    }

    componentDidMount(){
        this.props.fetchCategory();
    }

    componentWillReceiveProps(nextProps) {
        //this.props.fetchCategory();
    }

    makeCategory(){
        return _.mapValues(_.groupBy(this.props.projects, 'category'),clist => clist.map(cat => _.omit(cat, 'category')));
    }

    renderCategoryList() {
        return _.map(this.props.projects, project => {
            return (
                <li
                    key={project.id}
                    className="c-project-list--category"
                    >
                    {/*<Link to={`/projets/${project.id}`} >
                        voir
            </Link>*/}
                    <h1>{project[0].category}</h1>
                    {/*<p>{JSON.stringify(project)}</p>*/}
                    <ul>
                        {this.renderProjectList(project)}
                    </ul>
                </li>
            );
        })
    }

    renderProjectList(_project) {
        return _.map(_project, project => {
            return(
                <article>
                <li
                    key={project.id}
                    className="c-project-list__item"
                    >
                    <span className="c-project-list__item--line"></span>
                    <span className="c-project-list__item--point">•</span>
                    <article className="c-project-list__item__cell">{project.year}</article>
                    <article className="c-project-list__item__cell"><strong>{project.title}</strong></article>
                    <article className="c-project-list__item__cell">{project.description}</article>
                    <a href={`/projets/${project.id}`}>
                        Voir le projet
                    </a>
                </li>
                {/*<ProjectListDetail images={project.images}/>*/}
                </article>
            );
        });
    }

    render(){
        //this.props.fetchCategory();
        console.log(this.props.projects);
        return(
            <ul className="c-project-list">
                {this.renderCategoryList()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    return { projects: state.projects };
}

//export default connect(mapStateToProps, { fetchProjects })(ProjectList);
export default connect(mapStateToProps, { fetchCategory })(ProjectList);