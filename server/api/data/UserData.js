const User = require('./models/UserModel')

class UserData {
	_normalize(user) {

		const { _id, firstName, lastName, email, country, image, projects } = user
		return { id: _id, firstName, lastName, email, country, image, projects }
	}

	create(firstName, lastName, email, country, image, id)  {

		return new Promise((resolve, reject) => {

			const user = new User({ firstName, lastName, email, country, image, projects: id })

			user.save()
			.then (user => resolve(this._normalize(user)))
			.catch(reject)
		})
	}

	list() {
        return User.find()
            .then(user => user.map(user => this._normalize(user)))
    }


    UserProjects() {
    	return User.find({})
    			   .populate('projects')
    }

    userInfo(id) {
    	return User.findById(id)
    			   .populate('projects')
    }


	retrieve(id) {

		return new Promise((resolve, reject) => {

			if (!id)
				throw new Error(`cannot find this ${id}`)
			User.findById(id)
                .then(user => resolve(this._normalize(user)))
                .catch(reject)
		})
	}

	update(id, firstName, lastName, email, country, image)  {

		return new Promise((resolve, reject) => {

		
			User.update({ _id: id }, { firstName, lastName, email, country, image })
                 .then(() => User.findById(id))
                    .then(user => resolve(this._normalize(user)))
                	.catch(reject)

		})
	}

	delete(id) {
        return new Promise((resolve, reject) => {

            User.findById(id)
                .then(user => User.remove({ _id: id })
                    .then(() => resolve(this._normalize(user))))
                .catch(reject)
        })
    }

}

module.exports = UserData