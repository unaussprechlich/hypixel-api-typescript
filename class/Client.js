const path = require('path')
const pp = require('phin').promisified

const Player = require(path.join(__dirname, 'Player.js'))

/**
* Main Client class. API keys are used to create client instances.
*/
class Client {
	constructor (key) {
		this.key = key
	}

	/**
	* Get a Player instance for a player.
	* @param {string} [targetType=uuid] - Target type. 'name' or 'uuid'
	* @param {string} identifier - Identifier for the target. (Either a name or UUID, based on targetType.)
	*/
	async getPlayer(p1, p2) {
		const targetType = (p2 ? p1 : 'uuid')
		const identifier = (p2 ? p2 : p1)

		if (targetType === 'name') {
			let playerResolution = await pp({
				'url': 'https://api.mojang.com/profiles/minecraft',
				'method': 'POST',
				'data': JSON.stringify([identifier])
			})

			if (playerResolution.statusCode === 200) {
				let body
				try {
					body = JSON.parse(playerResolution.body)

					if (!Array.isArray(body)) throw 'Not array'
				}
				catch (err) {
					throw new Error('Invalid response recieved from Mojang UUID resolution endpoint.')
				}

				if (body.length > 0) {
					return new Player(body[0].id, this.key)
				}
				else {
					throw new Error('Player does not exist.')
				}
			}
			else {
				throw new Error('Unexpected status code from Mojang UUID resolution endpoint.')
			}
		}
		else {
			return new Player(identifier, this.key)
		}
	}
}

module.exports = Client