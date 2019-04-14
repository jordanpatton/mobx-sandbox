import { combineReducers } from 'redux';

import {
    INDEX_USERS_PENDING,
    INDEX_USERS_SUCCESS,
    INDEX_USERS_FAILURE,
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    INDEX_WIDGETS_PENDING,
    INDEX_WIDGETS_SUCCESS,
    INDEX_WIDGETS_FAILURE,
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

function user(state = {}, action) {
    switch (action.type) {
        case GET_USER_PENDING:
            return { ...state, error: undefined };
        case GET_USER_SUCCESS:
            return { ...state, data: action.data, error: undefined };
        case GET_USER_FAILURE:
            return { ...state, error: true };
        default:
            return state;
    }
}

function widgets(state = {}, action) {
    switch (action.type) {
        case INDEX_WIDGETS_PENDING:
            return { ...state, error: undefined };
        case INDEX_WIDGETS_SUCCESS:
            return { ...state, data: action.data, error: undefined };
        case INDEX_WIDGETS_FAILURE:
            return { ...state, error: true };
        default:
            return state;
    }
}

export default combineReducers({
    users,
    user,
    widgets,
});
