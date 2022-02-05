const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const PORT = 3001;

const app = express();

const routes = require('./routes/routes');

app.use('/api', routes);

app.use('/', express.static(path.join(__dirname, 'view')));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
