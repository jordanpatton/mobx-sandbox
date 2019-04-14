import React from 'react';

import UsersStore from '../../stores/UsersStore.js';
import Users from '../Users/index.jsx';

export const App = () => (
    <Users store={new UsersStore()} />
);

export default App;
