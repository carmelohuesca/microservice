require('dotenv').config();
const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const PATH = require('path');
const MORGAN = require('morgan');
const FS = require('fs');
const CONFIG = require('./config');
const CORS = require('./CORS');
const ROUTER = require('../routes');
const APP = EXPRESS();

// CORS headers
APP.use(CORS.INIT);

// PARSER
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({ extended: true }));

// ENVIRONMENT
if (CONFIG.NODE_ENV !== 'production') {
    APP.use(MORGAN('common', {
        stream: FS.createWriteStream('./LOGS.log', { flags: 'a' })
    }));
    APP.use(MORGAN('dev'));
}

// ROUTER
APP.use(ROUTER);

// LISTENER
APP.listen(CONFIG.PORT, () => {
    console.log('================================================================');
    console.log('ENVIRONMENT INFO');
    console.log('================================================================');
    console.log('NODE_ENV: ' + CONFIG.NODE_ENV);
    console.log('PORT: ' + CONFIG.PORT);
    console.log('================================================================');
});

module.exports = APP;