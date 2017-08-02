const path = require('path');

const config = {
	env: 'dev',
	root: path.normalize(`${__dirname}/..`),
	server: {
		name: 'ifonny-api',
		port: process.env.PORT || 7001
	},
	api: 'http://api.ifonny.fr',
	url: 'http://beta.ifonny.fr',
	logs: {
		webhook: 'https://discordapp.com/api/webhooks/340500939981062145/o_lk8TOx90Bmtg3-2f7GOqzWY80H3bMIW27g9Tc7FN0dbVR7-iW57mdqRHOOAngkKxBR'
	}
};

// Exports module
module.exports = config;