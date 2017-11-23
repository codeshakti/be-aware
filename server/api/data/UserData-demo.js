require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const userData = new(require('./UserData'))


 // userData.create("Jose", "Martinez", 332, "eamail@email.com", "678567654", "Catalunya", "23432346p")
 // 	.then(console.log)
 // 	.catch(console.err)

 // userData.list("5a140779a5f91f45394be92b")
 // 	.then(console.log)
 // 	.catch(console.err)

  // userData.retrieve('5a140779a5f91f45394be92b')
  // 	.then(console.log)
  // 	.catch(console.err)

  userData.update("5a140779a5f91f45394be92b","Peota", "Martineasz", 2332, "eamail@email.com", "678567654", "Catalunya", "23432346p")
  	.then(console.log)
  	.catch(console.err)

//  userData.delete('5a02f613d243f106feeb4b97')
//  	.then(console.log)
//  	.catch(console.err)

//  userData.create('buy milk', false)
//      .then(task => userData.delete(task._id)
//          .then(console.log))
//      .catch(console.err)