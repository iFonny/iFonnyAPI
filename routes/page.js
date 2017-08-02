/**
 * GET /page/home
 * 
 * return {object} data
 * 
 * data: {
 * 	title: string,
 * 	main: {
 * 		twitter: {
 * 			username: string,
 * 			url: string,
 * 			image: path
 * 		},
 *		youtube: {
 * 			username: string,
 * 			url: string,
 * 			image: path
 * 		},
 * 		discord: {
 * 			username: string,
 * 			url: string,
 * 			image: path
 * 		}
 * 	}
 * 	list: [
 * 		{
 * 			network: string,
 *			username: string,
 *			url: string,
 *			image: path
 * 		}
 * 	]
 * }
 */
exports.home = function (req, res, next) {
	res.json(200, {
		title: '',
		main: {
			twitter: {
				username: 'iFonny_',
				url: 'https://twitter.com/iFonny_',
				image: '/assets/images/twitter.png'
			},
			youtube: {
				username: 'iFonny',
				url: 'https://www.youtube.com/user/iphonitest',
				image: '/assets/images/youtube.png'
			},
			discord: {
				username: 'iGland',
				url: 'http://igland.ifonny.fr',
				image: '/assets/images/discord.png'
			}
		},
		list: [{
			network: 'Instagram',
			username: 'ifonny_',
			url: 'https://www.instagram.com/ifonny_/',
			image: '/assets/images/social/instagram.png'
		}, {
			network: 'Discord',
			username: 'iFonny#6666',
			url: 'http://igland.ifonny.fr',
			image: '/assets/images/social/discord.png'
		}, {
			network: 'Battle.net',
			username: 'iFonny#2881',
			url: 'http://eu.battle.net/fr/',
			image: '/assets/images/social/battlenet.png'
		}, {
			network: 'League Of Legends',
			username: 'iFonny',
			url: '/smurfs',
			image: '/assets/images/social/lol.png'
		}, {
			network: 'Snapchat',
			username: 'iphonitest',
			url: 'https://www.snapchat.com/',
			image: '/assets/images/social/snapchat.png'
		}, {
			network: 'Twitch',
			username: 'iFonny',
			url: 'https://www.twitch.tv/ifonny',
			image: '/assets/images/social/twitch.png'
		}, {
			network: 'Reddit',
			username: 'iFonny',
			url: 'https://www.reddit.com/user/iFonny',
			image: '/assets/images/social/reddit.png'
		}, {
			network: 'Steam',
			username: 'iFonny',
			url: 'http://steamcommunity.com/id/ifonny/',
			image: '/assets/images/social/steam.png'
		}]
	});
}