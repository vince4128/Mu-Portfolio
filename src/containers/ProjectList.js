import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {

    renderList() {
        return this.props.projects.map((project) => {
            return (
                <li
                    key={project.title}
                    onClick={() => this.props.selectProject(project)}
                    className="c-project-list__item">
                    {project.title}
                </li>
            );
        })
    }

    render(){
        return(
            <ul className="c-project-list">
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    //peu importe ce qui est retourné, est présent dans les props
    return {
        projects:state.projects
    };
}

//Peu importe ce qui est retourné par cette fonction va finir par être présent dans les props dans le ProjectList containers
function mapDispatchToProps(dispatch){
    //Quand selectProject est invoqué, le résultat sera passé à tous les reducers
    return bindActionCreators({ selectProject: selectProject}, dispatch)
}

//Elever ProjectList de component a container
//Pour cela il faut utiliser la méthode dispatch, (et selectProject en paramètre)
//rendre accessible dans les props
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);