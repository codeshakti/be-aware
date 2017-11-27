const User = require('./models/UserModel')

class UserData {
	create(firstName, lastName, email, country, image, projects) {
		return new Promise((resolve, reject) => {

			// TODO add fields validation (see retrieve)

			const user = new User({ firstName, lastName, email, country, image, projects })

			user.save()
				.then(resolve)
				.catch(reject)
		})
	}

	list() {
		return User.find()
	}


	retrieve(_id) {
		return new Promise((resolve, reject) => {

			if (!_id)
				throw new Error(`_id cannot be ${_id}`)

			User.findById(_id)
				.populate('projects')
				.then(resolve)
				.catch(reject)
		})
	}

	update(_id, firstName, lastName, email, country, image) {
		return new Promise((resolve, reject) => {

			// TODO add fields validation

			User.update({ _id }, { firstName, lastName, email, country, image })
				.then(() => User.findById(_id))
				.then(resolve)
				.catch(reject)

		})
	}

	delete(_id) {
		return new Promise((resolve, reject) => {

			User.findById(_id)
				.then(user => {
					User.remove({ _id })

					return user
				})
				.then(resolve)
				.catch(reject)
	})
}

}

module.exports = UserData