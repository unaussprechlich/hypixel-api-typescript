const path = require('path')
const p = require('phin')

/**
* Player class, used to represent players.
*/
class Player {
	constructor (uuid, key) {
		this.uuid = uuid
		this.key = key
	}

	/**
	* Get the player's name using Mojang's API
	*/
	get name() {
		p({
			'url': 'https://api.mojang.com/users/profiles/minecraft/' + encodeURIComponent(this.uuid),
			'method': 'GET'
		}, (err, res) => {
			if (err) throw err

			if (res.statusCode === 200) {
				return JSON.parse(res.body).name
			}
			else {
				throw new Error('Mojang name resolution endpoint failed to respond as expected.')
			}
		})
	}

	async getData() {
		p({
			'url': 'https://api.hypixel.net/player?uuid=' + encodeURIComponent(this.uuid) + '&key=' + encodeURIComponent(this.key),
			'method': 'GET'
		}, (err, res) => {
			if (err) throw err

			if (res.statusCode === 200) {
				return JSON.parse(res.body.toString()).player
			}
			else {
				throw new Error('API endpoint gave unexpected response.')
			}
		})
	}
}

module.exports = Player
