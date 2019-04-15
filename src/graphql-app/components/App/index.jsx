import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Users from '../Users/index.jsx';

export const apolloClient = new ApolloClient({ uri: 'http://localhost:3000/graphql' });

export const App = () => (
    <ApolloProvider client={apolloClient}>
        <Users />
    </ApolloProvider>
);

export default App;
