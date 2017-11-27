const Org = require('./models/OrgModel')

class OrgData {
	create(CompanyName, website, NIE, country, telephone, zipCode, logo, category, description) {
		return new Promise((resolve, reject) => {

			// TODO validate fields (see retrieve)

			const org = new Org({ CompanyName, website, NIE, country, telephone, zipCode, logo, category, description })

			org.save()
				.then(resolve)
				.catch(reject)
		})
	}

	list() {
		return Org.find()
	}

	retrieve(_id) {
		return new Promise((resolve, reject) => {

			if (!_id)
				throw new Error(`_id cannot be ${_id}`)

			Org.findById(_id)
				.then(resolve)
				.catch(reject)
		})
	}

	update(CompanyName, website, NIE, country, telephone, zipCode, logo, category, description) {
		return new Promise((resolve, reject) => {

			// TODO validate fields

			Org.update({ _id }, { CompanyName, website, NIE, country, telephone, zipCode, logo, category, description })
				.then(() => Org.findById(_id))
				.then(resolve)
				.catch(reject)
		})
	}


	delete(_id) {
		return new Promise((resolve, reject) => {

			// TODO validate fields

			Org.findById(_id)
				.then(org => {
					org.remove({ _id })
					
					return org
				})
				.then(resolve)
				.catch(reject)
		})
	}
}

module.exports = OrgData

