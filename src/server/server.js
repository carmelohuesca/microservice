require('dotenv').config();
const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const PATH = require('path');
const MORGAN = require('morgan');
const FS = require('fs');
const CONFIG = require('./config');
const CORS = require('./CORS');
const ROUTER = require('../routes');

const app = EXPRESS();

// CORS headers
app.use(CORS.INIT);

app.use(BODY_PARSER.json());
app.use(BODY_PARSER.urlencoded({ extended: true }));

if (CONFIG.NODE_ENV !== 'production') {
    app.use(MORGAN('common', {
        stream: FS.createWriteStream('./LOGS.log', { flags: 'a' })
    }));
    app.use(MORGAN('dev'));
}

app.use(ROUTER);

app.listen(CONFIG.PORT, () => {
    console.log('================================================================');
    console.log('ENVIRONMENT INFO');
    console.log('================================================================');
    console.log('NODE_ENV: ' + CONFIG.NODE_ENV);
    console.log('PORT: ' + CONFIG.PORT);
    console.log('================================================================');
});

module.exports = app;