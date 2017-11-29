import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategory } from '../actions/index';

import ProjectListDetail from '../components/ProjectListDetail';

class ProjectList extends Component {

    constructor(props) {
        super(props);

        this.renderCategoryList = this.renderCategoryList.bind(this);
        this.renderProjectList = this.renderProjectList.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategory();
    }


    makeCategory() {
        return _.mapValues(_.groupBy(this.props.projects, 'category'), clist => clist.map(cat => _.omit(cat, 'category')));
    }

    renderCategoryList() {
        return _.map(this.props.projects, project => {

            if (project[0]) {
                project = project[0]
            }

            return (
                <li
                    key={project.id}
                    className="c-project-list--category"
                >
                    <h1>{project.category}</h1>
                    <ul>
                        {this.renderProjectList(project)}
                    </ul>
                </li>
            );
        })
    }

    renderProjectList(project) {
        console.log("###projectList### converti " + JSON.stringify(project));
        return (
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
                    <Link to={`/projets/${project.id}`}>
                        Voir le projet
                    </Link>
                </li>
            </article>
        );
    }

    render() {
        return (
            <ul className="c-project-list">
                {this.renderCategoryList()}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchCategory })(ProjectList);