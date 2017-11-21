const User = require('./models/userModel')

class userModel {
	_normalize(user) {

		const { _id, name, surname, email, telephone } = user

		return { id: _id, name, surname, email, telephone}
	}

	create(name, surname, email, telephone) {

		return new Promise((resolve, reject) => {

			if (!telephone)
				throw new Error(`telephone cannot be ${telephone}`)

			const user = new User({ name, surname, email, telephone })

			task save()
			.then (task => resolve(this._normalize(task)))
			.catch(reject)
		})
	}
}

module.exports = userModel