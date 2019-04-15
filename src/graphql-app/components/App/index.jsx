import React from 'react';

import Users from '../Users/index.jsx';
import { apolloClient, AppContext } from './context.js';

export const App = () => (
    <AppContext.Provider value={{ apolloClient }}>
        <Users />
    </AppContext.Provider>
);

export default App;
