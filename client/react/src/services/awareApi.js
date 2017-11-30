import axios from 'axios'
//const axios = require('axios')

const awareApi = {
	// baseUrl: 'https://peaceful-meadow-44397.herokuapp.com/charitysearch?user_key=01289bdc6c2b9417e0d77a5dc3a34112&searchTerm=india',
	baseUrl: 'http://localhost:3006/api',

	ListByName: function(searchTerm) {
		return axios.get(this.baseUrl + '/users')
			.then (res => res.data.data)
	},
	retriveProject: function(_id) {
		return axios.get(this.baseUrl + '/projects/'+ _id)
			.then (res => res.data.data)
	},

	ListByProject: function() {
		return axios.get(this.baseUrl + '/projects')
			.then (res => res.data.data)
	},

	ListByOrg: function(searchTerm) {
		return axios.get(this.baseUrl + '/orgs')
			.then (res => res.data.data)
	},

	retriveUser: function(id) {
		return axios.get(this.baseUrl + '/users/' + id)
			.then (res => {
				return res.data.data
			})
	},

	retriveOrg: function(_id) {
		console.log(_id,'_id retrive org')
		return axios.get(this.baseUrl + '/orgs/' + _id)
			.then (res => res.data.data)
	},

	UserById: function(searchTerm, _id) {
		return axios.get(this.baseUrl + '/userById/'+ _id)
			.then (res => res.data.data)
	},

	CreateProject: function(CompanyName, ProjectName, website, country, city, telephone, category, description, image, id) {
		return axios.post(this.baseUrl + '/projects',{CompanyName, ProjectName, website, country, city, telephone, category, description, image, id})
		.then (res => res.data.data)
	},

	CreateUser: function(firstname, lastname, email, country, image, password, confirm_password) {
		return axios.post(this.baseUrl + '/users',{firstname, lastname, email, country, image, password, confirm_password})
		.then (res => res.data.data)
	},

	DeleteProject: function(_id) {
		return axios.delete(this.baseUrl + '/projects',{params:{_id:_id }})
		.then (res => res.data.data)
	},
	retriveProjectbyId: function(_id) {
			return axios.get(this.baseUrl + "/" + _id + "/projects")
			.then (res => res.data.data)
	}


}

export default awareApi
//module.exports = awareApi