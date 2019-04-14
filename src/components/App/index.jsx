import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../../reducers/index.js';
import Page from '../Page/index.jsx';

export function createStoreHelper({ initialState = {} } = {}) {
    return createStore(
        combineReducers({ reducers }),
        initialState,
        applyMiddleware(thunk),
    );
}

export const App = () => (
    <Provider store={createStoreHelper()}>
        <Page />
    </Provider>
);

export default App;
