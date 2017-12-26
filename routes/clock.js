/**
 * GET /clock/message/:message
 * 
 * message: less 16 chars
 */
exports.message = function (req, res, next) {

	if (req.params.user) {
		req.params.user = req.params.user.trim().substr(0,8);
	} else req.params.user = '';

	let icon = 3143;

	switch (req.params.user) {
		case 'equinox':
			icon = 16341;
			break;
	
		default:
			break;
	}

	if (!req.params.message || req.params.message.trim() == '') {
		res.json(400, 'Error: Tu peux entrer un message stp?');
	} else if (req.params.message.length > 16) {
		res.json(400, "Error: Tu peux pas entrer de message de plus de 16 characteres psk sinon c'est chiant a lire les pixels 'fin voila voila");
	} else {
		_modules.axios.post(`https://maker.ifttt.com/trigger/clock_message/with/key/${config.secret.ifttt.webhookKey}`, {
			value1: req.params.message.trim(),
			value2: req.params.user,
			value3: icon
		}).then(response => {
			res.json(200, `Youpi !!!! tu as envoyé : ${req.params.message} - ${req.params.user} (${icon})`);
		}).catch(error => {
			res.json(500, 'Ono ca marche pas!');
		});
	}

}