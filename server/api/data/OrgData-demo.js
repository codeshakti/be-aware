require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const OrgData = new(require('./OrgData'))


 OrgData.create("Open Arms","https://www.proactivaopenarms.org/es","2946539M","Catalunya",902222900,"08323","https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj0x_ezgdzXAhWHOBQKHaGpDbIQjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCMTagAVnD_SZiefyJhlax_A&psig=AOvVaw32829tBEAdtW2ycyPavzuf&ust=1511777820313594","ONG","Proactiva Open Arms es una organización no gubernamental de Badalona (Barcelona, España) cuya principal misión es rescatar del mar a los refugiados que llegan a Europa huyendo de conflictos bélicos, persecución o pobreza. Nace de una empresa de socorrismo y salvamento marítimo con dilatada experiencia en las costas españolas.")
  	.then(console.log)
  	.catch(console.err)

  // OrgData.list()
 	// .then(console.log)
 	// .catch(console.err)

   // OrgData.retrieve('5a154155f30bb447a3997c56')
   // 	.then(console.log)
   // 	.catch(console.err)


 // OrgData.delete('5a17ea47a03fa32bf19a753a')
 // 	.then(console.log)
 // 	.catch(console.err)

//  OrgData.create('buy milk', false)
//      .then(task => OrgData.delete(task._id)
//          .then(console.log))
//      .catch(console.err)