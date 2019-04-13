const express = require('express');

const userFixtures = require('./fixtures/users.json');
const widgetFixtures = require('./fixtures/widgets.json');

const app = express();

app.get('/', (_req, res, _next) => res.send('OK'));
app.get('/api', (_req, res, _next) => res.json({}));

// users
app.get('/api/users', (_req, res, _next) => res.json({users: userFixtures}));
app.get('/api/users/:userId', (req, res, _next) =>
    res.json({users: userFixtures.filter(val =>
        String(val.id) === String(req.params.userId)
    )})
);

// widgets
app.get('/api/widgets', (_req, res, _next) => res.json({widgets: widgetFixtures}));
app.get('/api/widgets/:widgetId', (req, res, _next) =>
    res.json({widgets: widgetFixtures.filter(val =>
        String(val.id) === String(req.params.widgetId)
    )})
);

// 404
app.get('*', (_req, res, _next) => res.status(404).send('Not Found'));

app.listen(3000, () => console.log('listening on port 3000...'));
