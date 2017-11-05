import { combineReducers } from 'redux';
import ProjectReducer from './reducer_project';
import ActiveProject from './reducer_active_project';

const rootReducer = combineReducers({
    projects: ProjectReducer,
    activeProject: ActiveProject
});

export default rootReducer;