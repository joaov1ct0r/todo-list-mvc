const express = require('express');

const path = require('path');

const PORT = 3001;

const app = express();

const routes = require('./routes/api');

app.use('/api', routes);

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
