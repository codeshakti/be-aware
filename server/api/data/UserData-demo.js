require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const userData = new(require('./UserData'))


   userData.create("Jose", "Martinez","email@email.com", "Catalunya", "https://pbs.twimg.com/<profile_></profile_>images/616523971299799040/2TmsQKJa.jpg","password", "password")
   	.then(console.log)
   	 .catch(console.err)

//  // userData.list()
//  // 	.then(console.log)
//  // 	.catch(console.err)

//   // userData.retrieve('5a140779a5f91f45394be92b')
//   // 	.then(console.log)
//   // 	.catch(console.err)

//   // userData.update("5a1820ceb7d6e85d17aea144","Jose", "Martinez", "email@email.com", "Catalunya", "https://pbs.twimg.com/profile_images/616523971299799040/2TmsQKJa.jpg","5a189086cef92f2bbd0e20f3","5a1a970ae384697478159623")
//   // 	.then(console.log)
//   // 	.catch(console.err)

  // userData.delete('5a1bed9f21ff6a43d27750e7')
  // 	.then(console.log)
  // 	.catch(console.err)

// //  userData.create('buy milk', false)
// //      .then(task => userData.delete(task._id)
// //          .then(console.log))
// //      .catch(console.err)