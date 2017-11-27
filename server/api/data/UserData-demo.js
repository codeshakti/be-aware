require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const userData = new(require('./UserData'))


  // userData.create("Jose", "Martinez","email@email.com", "Catalunya", "https://pbs.twimg.com/<profile_></profile_>images/616523971299799040/2TmsQKJa.jpg")
  // 	.then(console.log)
  // 	.catch(console.err)

 // userData.list()
 // 	.then(console.log)
 // 	.catch(console.err)

  // userData.retrieve('5a140779a5f91f45394be92b')
  // 	.then(console.log)
  // 	.catch(console.err)

  // userData.update("5a140779a5f91f45394be92b","Peota", "Martineasz", 2332, "eamail@email.com", "678567654", "Catalunya", "23432346p")
  // 	.then(console.log)
  // 	.catch(console.err)

  // userData.delete('5a18216c22617b5da5849fbd')
  // 	.then(console.log)
  // 	.catch(console.err)

//  userData.create('buy milk', false)
//      .then(task => userData.delete(task._id)
//          .then(console.log))
//      .catch(console.err)