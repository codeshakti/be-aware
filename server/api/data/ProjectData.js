const Project = require('./models/ProjectModel')
const Ong = require('./models/OrgModel.js')

// TODO clean code! (see user and org data)

class ProjectData {
	create(companyname, projectname, website, country, city, telephone, category, description, image, id) {

			const project = new Project({ companyname, projectname, website, country, city, telephone, category, description, image })

			const projectId = project._id

			return project.save()
				.then(() => {
					return Ong.findByIdAndUpdate(id, {$push:{project: projectId}})
				})
	}

	list() {
		return Project.find()
	}

	retrieve(id) {

		return new Promise((resolve, reject) => {

			if (!id)
				throw new Error(`id cannot be ${id}`)

			Project.findById(id)
				.then(resolve)
				.catch(reject)
		})
	}

	update(_id, companyname, projectname, website, country, city, telephone, category, description, image) {

		return new Promise((resolve, reject) => {

			Project.update({ _id }, { companyname, projectname, website, country, city, telephone, category, description, image })
				.then(() => Project.findById(_id))
				.then(resolve)
				.catch(reject)
		})
	}


	delete(_id) {
		return new Promise((resolve, reject) => {

			Project.remove({ _id })
				.then(resolve)
				.catch(reject)
		})
	}
}

module.exports = ProjectData

