const Project = require('./models/ProjectModel')


class ProjectData {

	_normalize(project) {

		const { _id, charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image } = project
		return {id: _id, charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image }
	}


	create(charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image) {

		return new Promise((resolve, reject) => {

			const project = new Project({ charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image })

			project.save()
			.then (project => resolve(this._normalize(project)))
			.catch(reject)

		})
	}

	list() {
        return Project.find()
            .then(project => project.map(project => this._normalize(project)))
    }

		retrieve(id) {

		return new Promise((resolve, reject) => {

			if (!id)
				throw new Error(`cannot find this ${id}`)
			Project.findById(id)
                .then(project => resolve(this._normalize(project)))
                .catch(reject)
		})
	}

	update(id, charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image) {

		return new Promise((resolve, reject) => {

			Project.update({ _id: id }, { charityName, donationUrl, city, country, zipCode, acceptingDonations, category, text, image })
                 .then(() => Project.findById(id)
                 .then(project => resolve(this._normalize(project))))
                	.catch(reject)
		})
	}


	delete(id) {
        return new Promise((resolve, reject) => {

            Project.findById(id)
                .then(project => project.remove({ _id: id })
                    .then(() => resolve(this._normalize(project))))
                .catch(reject)
        })
    }
}

module.exports = ProjectData

