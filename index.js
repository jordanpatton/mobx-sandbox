const path = require('path');
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const userFixtures = require('./fixtures/users.json');
const widgetFixtures = require('./fixtures/widgets.json');

const PORT = process.env.PORT || 3000;
const app = express();

// =======================================================================================
// graphql
// =======================================================================================
const typeDefs = gql`
type User {
    id: ID
    first_name: String
    last_name: String
    email_address: String
    company_name: String
    image_url: String
}
type Widget {
    id: ID
    owner_id: ID
    name: String
    description: String
    image_url: String
}
type Query {
    users: [User]
    user(id: ID): User
    widgets(owner_id: ID): [Widget]
    widget(id: ID): Widget
}
`;

const resolvers = {
    Query: {
        users: (_parent, _args, _context, _info) => userFixtures,
        user: (_parent, args, _context, _info) => (
            userFixtures.find(val => String(val.id) === String(args.id))
        ),
        widgets: (_parent, args, _context, _info) => (
            typeof args.owner_id !== 'undefined'
            ? widgetFixtures.filter(val => String(val.owner_id) === String(args.owner_id))
            : widgetFixtures
        ),
        widget: (_parent, args, _context, _info) => (
            widgetFixtures.find(val => String(val.id) === String(args.id))
        ),
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

// =======================================================================================
// express
// =======================================================================================
// middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// default routes
app.get('/', (_req, res, _next) => res.send('OK'));
app.get('/api', (_req, res, _next) => res.json({}));

// users routes
app.get('/api/users', (req, res, _next) =>
    req.query.userId
    ? res.json({users: userFixtures.filter(val => String(val.id) === String(req.query.userId))})
    : res.json({users: userFixtures.slice(0, 19)})
);
app.get('/api/users/:userId', (req, res, _next) =>
    res.json({user: userFixtures.find(val => String(val.id) === String(req.params.userId))})
);

// widgets routes
app.get('/api/widgets', (req, res, _next) =>
    req.query.userId
    ? res.json({widgets: widgetFixtures.filter(val => String(val.owner_id) === String(req.query.userId))})
    : res.json({widgets: widgetFixtures.slice(0, 19)})
);
app.get('/api/widgets/:widgetId', (req, res, _next) =>
    res.json({widget: widgetFixtures.find(val => String(val.id) === String(req.params.widgetId))})
);

// 404
app.get('*', (_req, res, _next) => res.status(404).send('Not Found'));

app.listen(PORT, () => {
    console.log(`express listening on port ${PORT}...`);
    console.log(`graphql available at ${apolloServer.graphqlPath}...`);
});
