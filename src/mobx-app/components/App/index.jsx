import React from 'react';
import { Provider } from 'mobx-react';

import UsersStore from '../../stores/UsersStore.js';
import Users from '../Users/index.jsx';

export const App = () => (
    <Provider usersStore={new UsersStore()}>
        <Users />
    </Provider>
);

export default App;
