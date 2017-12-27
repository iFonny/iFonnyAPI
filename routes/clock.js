/**
 * GET /clock/message/:message
 * 
 * message: less 20 chars
 */
exports.message = function (req, res, next) {

	if (req.params.user && req.params.user.trim() != '')  {
		req.params.user = req.params.user.trim().substr(0, 8);
	} else return res.json(400, 'Error: Alors non, tu mets ton pseudo, tout de suite.');

	let icon = 3143;

	switch (req.params.user) {
		case 'equinox':
			icon = 16341;
			break;

		default:
			break;
	}

	if (!req.params.message || req.params.message.trim() == '') {
		return res.json(400, 'Error: Tu peux entrer un message stp?');
	} else if (req.params.message.length > 20) {
		return res.json(400, "Error: Tu peux pas entrer de message de plus de 20 characteres psk sinon c'est chiant a lire les pixels 'fin voila voila");
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