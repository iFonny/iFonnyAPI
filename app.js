const fs = require('fs');
const restify = require('restify');

global.config = require('./configs/cursor');
global._modules = {
	axios: require('axios')
}

/* Logs init */
require('./utils/logs').initLogs();

//  create server
const server = restify.createServer({
	name: config.server.name
});

server.pre(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
	res.setHeader('Access-Control-Max-Age', '1000');

	return next();
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.fullResponse());
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

// clock
server.get('/clock/message/:message', restify.plugins.throttle({ burst: 2, rate: 0.08, ip: true }), routes.clock.message);
server.get('/clock/message/:message/:user', restify.plugins.throttle({ burst: 2, rate: 0.08, ip: true }), routes.clock.message);


//  start server
server.listen(config.server.port, () => {
	__logInfo(`${server.name} listening at ${config.server.port}`);
});