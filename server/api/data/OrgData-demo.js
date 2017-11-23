require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const orgData = new(require('./OrgData'))


 // orgData.create("Open Arms","www.opem.es","2234234M","Mediterraneo",992222900,"08323")
 //  	.then(console.log)
 //  	.catch(console.err)

  // orgData.list()
 	// .then(console.log)
 	// .catch(console.err)

   // orgData.retrieve('5a154155f30bb447a3997c56')
   // 	.then(console.log)
   // 	.catch(console.err)


 orgData.delete('5a142c77e472be5c1ffa8291')
 	.then(console.log)
 	.cat(console.err)

//  orgData.create('buy milk', false)
//      .then(task => orgData.delete(task._id)
//          .then(console.log))
//      .catch(console.err)