const devConfig = require('./dev');
const prodConfig = require('./prod');

// Datas
const env = process.env.NODE_ENV || devConfig.env;
let config = {};

// Switch between env
switch (env) {

    // Development
    case 'dev':
        config = devConfig;
        config.secret = require('./dev-secret');
        break;

        // Production
    case 'prod':
        config = prodConfig;
        config.secret = require('./prod-secret');
        break;
}

// Exports module
module.exports = config;