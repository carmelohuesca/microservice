require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const config = require('./config');
const cors = require('./cors');
const routes = require('../routes');
const app = express();

const init = () => {

    // CORS headers
    app.use(cors.init);

    // PARSER
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // ENVIRONMENT
    if (config.NODE_ENV !== 'production') {
        app.use(morgan('common', {
            stream: fs.createWriteStream('./LOGS.log', { flags: 'a' })
        }));
        app.use(morgan('dev'));
    }

    // STATIC SERVER
    app.use(express.static('public'));

    // ROUTER
    app.use(routes);

    // LISTENER
    app.listen(config.PORT, () => {
        console.log('================================================================');
        console.log('ENVIRONMENT INFO');
        console.log('================================================================');
        console.log('NODE_ENV: ' + config.NODE_ENV);
        console.log('PORT: ' + config.PORT);
        console.log('================================================================');
    });
    return app;
};

const closeServer = () => {
    app.close();
};

module.exports = {
    init,
    closeServer
};