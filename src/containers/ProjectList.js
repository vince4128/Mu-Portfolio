import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCategory } from '../actions/index';

import ProjectListDetail from '../components/ProjectListDetail';
import ProjectListItem from '../components/ProjectListItem';
import Menu from '../components/Menu';

class ProjectList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse:[]
        }

        this.renderCategoryList = this.renderCategoryList.bind(this);
        this.renderProjectList = this.renderProjectList.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategory();
    }

    renderCategoryList() {

        const sortedCategory = _.mapValues(_.groupBy(this.props.projects, 'category'), clist => clist.map(cat => _.omit(cat, 'make')));

        return _.map(sortedCategory, project => {

            //alert(JSON.stringify(project));

            const sortedByYearProject = _.orderBy(project, ['year'],['desc']);

            return (
                <li
                    key={project.id}
                    className="c-project-list--category"
                >
                    <h2>{project[0].category}</h2>
                    <ul>
                        {this.renderProjectList(sortedByYearProject)}
                    </ul>
                </li>
            );

        })
       
           
    }

    renderProjectList(project) {

        return (
                _.map(project, unicProject =>{

                    //alert(JSON.stringify(tmpCollapse));

                    return(
                        <ProjectListItem project={unicProject}/>   
                    )

                })
        );
    }

    render() {
        return (
            <span>
                <p class="c-project-list__btn--close">
                <NavLink to="/">
                <i className="fa fa-2x fa-times" aria-hidden="true" onClick={()=>this.toggleDesc()}></i>
                </NavLink>
                </p>
            <ul className="c-project-list">
                {this.renderCategoryList()}
            </ul>
            </span>
        )
    }

}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchCategory })(ProjectList);