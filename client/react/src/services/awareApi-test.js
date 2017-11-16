const awareApi = require('./awareApi')

awareApi.searchByName('nepal')
.then(console.log)
.catch(console.error)