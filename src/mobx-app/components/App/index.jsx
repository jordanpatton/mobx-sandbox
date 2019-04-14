import React from 'react';
import { Provider } from 'mobx-react';

import AppStore from '../../stores/index.js';
import Users from '../Users/index.jsx';

export const App = () => (
    <Provider store={new AppStore()}>
        <Users />
    </Provider>
);

export default App;
