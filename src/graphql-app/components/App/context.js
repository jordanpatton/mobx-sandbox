import React from 'react';
import ApolloClient from 'apollo-boost';

// These must be in a separate file from App.jsx or else they won't be defined in time.
export const apolloClient = new ApolloClient({ uri: 'http://localhost:3000/graphql' });
export const AppContext = React.createContext({ apolloClient });
