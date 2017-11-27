const Org = require('./models/OrgModel')


class OrgData {

	_normalize(org) {

		const { _id, CompanyName, website, NIE, country, telephone, zipCode, logo, category, description } = org
		return {id: _id, CompanyName, website, NIE, country, telephone, zipCode, logo, category, description }
	}


	create(CompanyName, website, NIE, country, telephone, zipCode, logo, category, description) {

		return new Promise((resolve, reject) => {

			const org = new Org({ CompanyName, website, NIE, country, telephone, zipCode, logo, category, description })

			org.save()
			.then (org => resolve(this._normalize(org)))
			.catch(reject)

		})
	}

	list() {
        return Org.find()
            .then(org => org.map(org => this._normalize(org)))
    }

		retrieve(id) {

		return new Promise((resolve, reject) => {

			if (!id)
				throw new Error(`cannot find this ${id}`)
			Org.findById(id)
                .then(org => resolve(this._normalize(org)))
                .catch(reject)
		})
	}

	update(CompanyName, website, NIE, country, telephone, zipCode, logo, category, description) {

		return new Promise((resolve, reject) => {

			Org.update({ _id: id }, { CompanyName, website, NIE, country, telephone, zipCode, logo, category, description })
                 .then(() => Org.findById(id)
                 .then(org => resolve(this._normalize(org))))
                	.catch(reject)
		})
	}


	delete(id) {
        return new Promise((resolve, reject) => {

            Org.findById(id)
                .then(org => org.remove({ _id: id })
                    .then(() => resolve(this._normalize(org))))
                .catch(reject)
        })
    }
}

module.exports = OrgData

