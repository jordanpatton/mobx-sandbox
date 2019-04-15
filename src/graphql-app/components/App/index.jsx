import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Users from '../Users/index.jsx';

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    resolvers: {
        // Query: {
        //     getUiSelectedUserId: (_root, _variables, { _cache, _getCacheKey }) => {
        //         console.log('TODO');
        //     }
        // },
        // Mutation: {
        //     setUiSelectedUserId: (_root, _variables, { cache, _getCacheKey }) => {
        //         cache.writeData({ data: { uiSelectedUserId: 'TODO' } });
        //     }
        // }
    }
});

export const App = () => (
    <ApolloProvider client={apolloClient}>
        <Users />
    </ApolloProvider>
);

export default App;
