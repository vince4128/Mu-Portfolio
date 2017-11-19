import _ from 'lodash';
import {FETCH_PROJECTS, FETCH_PROJECT, FETCH_CATEGORY} from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
            console.log("FETCH_PROJECTS lancé depuis reducer_project !");
            console.log(action.payload);
            return _.mapKeys(action.payload, "id");
            //return {1:{"id":1},2:{"id":2}};

        case FETCH_PROJECT:
        return { ...state, [action.payload.id]: action.payload };

        case FETCH_CATEGORY:
        return action.payload;

        default:
            return state;
    }

}