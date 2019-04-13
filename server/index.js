const express = require('express');

const userFixtures = require('./fixtures/users.json');
const widgetFixtures = require('./fixtures/widgets.json');

const app = express();

app.get('/', (_req, res, _next) => res.send('OK'));
app.get('/api', (_req, res, _next) => res.json({}));
app.get('/api/users', (_req, res, _next) => res.json({users: userFixtures}));
app.get('/api/widgets', (_req, res, _next) => res.json({users: widgetFixtures}));
app.get('*', (_req, res, _next) => res.status(404).send('Not Found'));

app.listen(3000, () => console.log('listening on port 3000...'));
