const fs = require('fs');
const restify = require('restify');

global.config = require('./configs/cursor');

/* Logs init */
require('./utils/logs').initLogs();

//  create server
const server = restify.createServer({
	name: config.server.name
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.throttle({
	burst: 100,
	rate: 50,
	ip: true,
}));

// Requires routes
let routes = {};
const routes_path = `${__dirname}/routes`;
fs.readdirSync(routes_path).forEach(function (file) {
	if (file.indexOf('.js') != -1) {
		routes[file.split('.')[0]] = require(routes_path + '/' + file)
	}
});

/* Routes */

// pages
server.get('/page/home', routes.page.home);


//  start server
server.listen(config.server.port, () => {
	console.log(`${server.name} listening at ${server.url}`);
});