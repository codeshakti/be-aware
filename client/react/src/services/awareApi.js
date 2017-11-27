import axios from 'axios'
//const axios = require('axios')

const awareApi = {
	// baseUrl: 'https://peaceful-meadow-44397.herokuapp.com/charitysearch?user_key=01289bdc6c2b9417e0d77a5dc3a34112&searchTerm=india',
	baseUrl: 'http://localhost:3006/api',

	ListByName: function(searchTerm) {
		return axios.get(this.baseUrl + '/users')
			.then (res => res.data.data)
	},
	ListByProject: function(searchTerm) {
		return axios.get(this.baseUrl + '/projects')
			.then (res => res.data.data)
	},
	ListByOrg: function(searchTerm) {
		return axios.get(this.baseUrl + '/orgs')
			.then (res => res.data.data)
	},

	UserProjects: function(searchTerm) {
		return axios.get(this.baseUrl + '/users/:id')
			.then (res => res.data.data)
	},
	UserById: function(searchTerm, id) {
		return axios.get(this.baseUrl + '/userById/'+id)
			.then (res => res.data.data)
	},
}

export default awareApi
//module.exports = awareApi