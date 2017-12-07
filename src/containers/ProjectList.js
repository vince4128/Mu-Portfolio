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

    renderCategoryList() {

        const sortedCategory = _.mapValues(_.groupBy(this.props.projects, 'category'), clist => clist.map(cat => _.omit(cat, 'make')));

        return _.map(sortedCategory, project => {

            return (
                <li
                    key={project.id}
                    className="c-project-list--category"
                >
                    <h1>{project[0].category}</h1>
                    <ul>
                        {this.renderProjectList(project)}
                    </ul>
                </li>
            );
        })
    }

    renderProjectList(project) {

        return (
            <article>
                { _.map(project, unicProject =>{

                    return(
                        <li
                            key={unicProject.id}
                            className="c-project-list__item"
                        >
                            <span className="c-project-list__item--line"></span>
                            <span className="c-project-list__item--point">•</span>
                            <article className="c-project-list__item__cell">{unicProject.year}</article>
                            <article className="c-project-list__item__cell"><strong>{unicProject.title}</strong></article>
                            <article className="c-project-list__item__cell">{unicProject.description}</article>
                            <Link to={`/projets/${unicProject.id}`}>
                                Voir le projet
                            </Link>
                        </li>
                    )

                })}
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