import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

            return (
                <li
                    key={project.id}
                    className="c-project-list--category"
                >
                    <h2>{project[0].category}</h2>
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

                    //alert(JSON.stringify(tmpCollapse));

                    return(
                        <span key={unicProject.id}>
                        {/*<li
                            key={unicProject.id}
                            className="c-project-list__item"
                            onClick={()=>alert('coucou')}
                        >*/}
                        <ProjectListItem project={unicProject}/>
                        {/*</li>*/}                        
                        </span>
                    )

                })}
            </article>
        );
    }

    render() {
        return (
            <span>
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