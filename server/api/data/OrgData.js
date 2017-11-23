const Org = require('./models/OrgModel')


class OrgData {

	_normalize(org) {

		const { _id, CompanyName, website, NIF, country, zipCode, category } = org
		return {id: _id, CompanyName, website, NIF, country, zipCode, category }
	}


	create(CompanyName, website, NIF, country, zipCode, category) {

		return new Promise((resolve, reject) => {

			const org = new Org({ CompanyName, website, NIF, country, zipCode, category })

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

	update(id, CompanyName, website, NIF, country, zipCode, category) {

		return new Promise((resolve, reject) => {

			Org.update({ _id: id }, { CompanyName, website, NIF, country, zipCode, category })
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

