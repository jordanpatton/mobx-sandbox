import { combineReducers } from 'redux';

import {
    UI_SELECT_USER_ID,
    UI_CLEAR_USER_ID,
    INDEX_USERS_PENDING,
    INDEX_USERS_SUCCESS,
    INDEX_USERS_FAILURE,
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    INDEX_WIDGETS_PENDING,
    INDEX_WIDGETS_SUCCESS,
    INDEX_WIDGETS_FAILURE,
} from '../actions';


interface UiState {
    selectedUserId?: number | string
}
interface UiSelectUserIdAction {
    data: number | string,
    type: typeof UI_SELECT_USER_ID,
}
interface UiClearUserIdAction {
    data: number | string,
    type: typeof UI_CLEAR_USER_ID,
}
type UiActionTypes = UiSelectUserIdAction | UiClearUserIdAction;

function ui(state: UiState = {}, action: UiActionTypes): UiState {
    switch (action.type) {
        case UI_SELECT_USER_ID:
            return { ...state, selectedUserId: action.data };
        case UI_CLEAR_USER_ID:
            return { ...state, selectedUserId: undefined };
        default:
            return state;
    }
}


interface UsersState {
    data?: any[],
    error?: boolean,
}
interface IndexUsersPendingAction {
    data: any[],
    type: typeof INDEX_USERS_PENDING,
}
interface IndexUsersSuccessAction {
    data: any[],
    type: typeof INDEX_USERS_SUCCESS,
}
interface IndexUsersFailureAction {
    data: any[],
    type: typeof INDEX_USERS_FAILURE,
}
type UsersActionTypes = IndexUsersPendingAction | IndexUsersSuccessAction | IndexUsersFailureAction;

function users(state: UsersState = {}, action: UsersActionTypes): UsersState {
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


interface UserState {
    data?: object,
    error?: boolean,
}
interface GetUserPendingAction {
    data: object,
    type: typeof GET_USER_PENDING,
}
interface GetUserSuccessAction {
    data: object,
    type: typeof GET_USER_SUCCESS,
}
interface GetUserFailureAction {
    data: object,
    type: typeof GET_USER_FAILURE,
}
type UserActionTypes = GetUserPendingAction | GetUserSuccessAction | GetUserFailureAction;

function user(state: UserState = {}, action: UserActionTypes): UserState {
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


interface WidgetsState {
    data?: any[],
    error?: boolean,
}
interface IndexWidgetsPendingAction {
    data: any[],
    type: typeof INDEX_WIDGETS_PENDING,
}
interface IndexWidgetsSuccessAction {
    data: any[],
    type: typeof INDEX_WIDGETS_SUCCESS,
}
interface IndexWidgetsFailureAction {
    data: any[],
    type: typeof INDEX_WIDGETS_FAILURE,
}
type WidgetsActionTypes = IndexWidgetsPendingAction | IndexWidgetsSuccessAction | IndexWidgetsFailureAction;

function widgets(state: WidgetsState = {}, action: WidgetsActionTypes): WidgetsState {
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
    ui,
    users,
    user,
    widgets,
});
