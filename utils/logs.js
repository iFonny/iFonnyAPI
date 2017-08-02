const request = require('request');

// Logs informations and errors
module.exports.initLogs = () => {

	const sendDiscordLog = (type, message) => {
		let msg = '';

		if (type == 'log') msg += ':loudspeaker: ';
		else if (type == 'info') msg += ':mega: ';
		else if (type == 'error') msg += ':x: ';
		else if (type == 'warn') msg += ':warning: ';

		request.post({
			url: config.logs.webhook,
			json: {
				username: `api.iFonny.fr - Logs [${config.env}]`,
				avatar_url: `${config.url}/assets/images/iFonnyPP.jpg`,
				content: msg + '`' + message + '`'
			}
		});
	};

	global.__log = (str) => {
		sendDiscordLog('log', str);
		console.log(str);
		return str;
	};

	global.__logInfo = (str) => {
		sendDiscordLog('info', str);
		console.info(str);
		return str;
	};

	global.__logError = (str) => {
		sendDiscordLog('error', str);
		console.error(str);
		return str;
	};

	global.__logWarning = (str) => {
		sendDiscordLog('warn', str);
		console.warn(str);
		return str;
	};

};