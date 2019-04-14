import { combineReducers } from 'redux';

import {
    INDEX_USERS_PENDING,
    INDEX_USERS_SUCCESS,
    INDEX_USERS_FAILURE,
} from '../actions/index.js';

function users(state = {}, action) {
    switch (action.type) {
        case INDEX_USERS_PENDING:
            return { ...state, error: undefined };
        case INDEX_USERS_SUCCESS:
            return { ...state, data: action.data, error: undefined };
        case INDEX_USERS_FAILURE:
            return { ...state, error: true };
        default:
            return state;
    }
}

export default combineReducers({
    users,
});
