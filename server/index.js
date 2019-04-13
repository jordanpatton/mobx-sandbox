const express = require('express');

const app = express();

app.get('/', (_req, res, _next) => res.send('OK'));
app.get('/api', (_req, res, _next) => res.json({}));

app.listen(3000, () => console.log('listening on port 3000...'));

