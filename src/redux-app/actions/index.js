export function fetchResource(resourceName = '', data) {
    return (
        (typeof window !== 'undefined' && typeof window.fetch !== 'undefined')
        ? window
            .fetch(`http://localhost:3000/api/${resourceName}`, {
                method: 'GET',
                params: data
            })
            .then(r => r.status === 200 ? r.json() : Promise.reject(r))
        : Promise.reject('window.fetch unavailable')
    );
}

// =======================================================================================
// UI
// =======================================================================================
// actions
export const UI_SELECT_USER_ID = 'UI_SELECT_USER_ID';
export const UI_CLEAR_USER_ID = 'UI_CLEAR_USER_ID';
// action generators
export const uiSelectUserId = data => ({ type: UI_SELECT_USER_ID, data });
export const uiClearUserId = () => ({ type: UI_CLEAR_USER_ID });

// =======================================================================================
// INDEX_USERS
// =======================================================================================
// actions
export const INDEX_USERS_PENDING = 'INDEX_USERS_PENDING';
export const INDEX_USERS_SUCCESS = 'INDEX_USERS_SUCCESS';
export const INDEX_USERS_FAILURE = 'INDEX_USERS_FAILURE';
// action generators
export const indexUsersPending = () => ({ type: INDEX_USERS_PENDING });
export const indexUsersSuccess = data => ({ type: INDEX_USERS_SUCCESS, data });
export const indexUsersFailure = data => ({ type: INDEX_USERS_FAILURE, data });
// action coordinator (returns a function that accepts `dispatch` as a parameter)
export function indexUsers() {
    return (dispatch) => {
        dispatch(indexUsersPending());
        return fetchResource('users')
            .then(responseJson => dispatch(indexUsersSuccess(responseJson)))
            .catch(() => dispatch(indexUsersFailure('FAILURE!')));
    };
}

// =======================================================================================
// GET_USER
// =======================================================================================
// actions
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
// action generators
export const getUserPending = () => ({ type: GET_USER_PENDING });
export const getUserSuccess = data => ({ type: GET_USER_SUCCESS, data });
export const getUserFailure = data => ({ type: GET_USER_FAILURE, data });
// action coordinator (returns a function that accepts `dispatch` as a parameter)
export function getUser(userId) {
    return (dispatch) => {
        dispatch(getUserPending());
        return fetchResource(`users/${userId}`)
            .then(responseJson => dispatch(getUserSuccess(responseJson)))
            .catch(() => dispatch(getUserFailure('FAILURE!')));
    };
}

// =======================================================================================
// INDEX_WIDGETS
// =======================================================================================
// actions
export const INDEX_WIDGETS_PENDING = 'INDEX_WIDGETS_PENDING';
export const INDEX_WIDGETS_SUCCESS = 'INDEX_WIDGETS_SUCCESS';
export const INDEX_WIDGETS_FAILURE = 'INDEX_WIDGETS_FAILURE';
// action generators
export const indexWidgetsPending = () => ({ type: INDEX_WIDGETS_PENDING });
export const indexWidgetsSuccess = data => ({ type: INDEX_WIDGETS_SUCCESS, data });
export const indexWidgetsFailure = data => ({ type: INDEX_WIDGETS_FAILURE, data });
// action coordinator (returns a function that accepts `dispatch` as a parameter)
export function indexWidgets(userId) {
    return (dispatch) => {
        dispatch(indexWidgetsPending());
        return fetchResource(userId ? `widgets?userId=${userId}` : 'widgets')
            .then(responseJson => dispatch(indexWidgetsSuccess(responseJson)))
            .catch(() => dispatch(indexWidgetsFailure('FAILURE!')));
    };
}
