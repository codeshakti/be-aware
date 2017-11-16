import axios from 'axios'
//const axios = require('axios')

const awareApi = {
	baseUrl: 'http://localhost:3005/charitysearch?user_key=01289bdc6c2b9417e0d77a5dc3a34112&searchTerm=india',

	searchByName: function(searchTerm) {
		return axios.get(this.baseUrl)
		.then (res=> res.data.data)
	},
}

export default awareApi
//module.exports = awareApi