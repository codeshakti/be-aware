const Project = require('./models/ProjectModel')

// TODO clean code! (see user and org data)

class ProjectData {
	create(companyName, url, country, projectName, category, text, image) {
		return new Promise((resolve, reject) => {

			const project = new Project({ companyName, url, country, projectName, category, text, image })

			project.save()
				.then(resolve)
				.catch(reject)

		})
	}

	list() {
		return Project.find()
	}

	retrieve(_id) {

		return new Promise((resolve, reject) => {

			if (!_id)
				throw new Error(`_id cannot be ${_id}`)

			Project.findById(_id)
				.then(resolve)
				.catch(reject)
		})
	}

	update(_id, companyName, url, country, projectName, category, text, image) {

		return new Promise((resolve, reject) => {

			Project.update({ _id }, { companyName, url, country, projectName, category, text, image })
				.then(() => Project.findById(_id))
				.then(resolve)
				.catch(reject)
		})
	}


	delete(_id) {
		return new Promise((resolve, reject) => {

			Project.findById(_id)
				.then(user => {
					Project.remove({ _id })

					return project
				})
				.then(resolve)
				.catch(reject)
		})
	}
}

module.exports = ProjectData

