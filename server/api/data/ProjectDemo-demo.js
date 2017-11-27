require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const ProjectData = new(require('./ProjectData'))


   // ProjectData.create("Open Arms","https://www.proactivaopenarms.org/es","Spain",1,"ONG", "Durante los tres primeros meses de 2016, las islas griegas (Lesbos y otras) han sido la principal vía de entrada de los más de 150.000 refugiados que han llegado a Europa.Tras el acuerdo entre la Unión Europea y Turquía, los refugiados que llegan a las islas del Egeo son deportados a Turquía, y en consecuencia, las vías de entrada a Europa desde Turquía van disminuyendo.De esta manera se abren nuevas rutas mucho más largas y arriesgadas en el Mediterráneo Central. Este trayecto es mucho más extenso - unos 300 km hasta la isla de Lampedusa y más de 500 hasta Sicilia -, por lo que el número de muertes en esta zona crítica es cada vez más alto.Desde el inicio de 2016, han llegado a las costas italianas unos 30.000 migrantes o refugiados, un 9% más que en el mismo periodo del año pasado.","https://www.proactivaopenarms.org/img/fb-share.jpg")
   //   	.then(console.log)
   //   	.catch(console.err)


  // ProjectData.list()
 	// .then(console.log)
 	// .catch(console.err)

   // ProjectData.retrieve('5a142c77e472be5c1ffa8291')
   // 	.then(console.log)
   // 	.catch(console.err)

  // ProjectData.update("5a16bd8be5a8144042f8c71b","Vicente Ferrer","https://www.fundacionvicenteferrer.org/es/","Barcelona" ,"Spain","08001",1,"ONG", "La Fundación Vicente Ferrer (FVF) es una ONG de desarrollo comprometida con el proceso de transformación de una de las zonas más pobres y necesitadas de la India, de los estados de Andhra Pradesh y Telangana y de las comunidades más vulnerables y en riesgo de exclusión, incluidos los dálit, los grupos tribales y castas desfavorecidas.La Fundación es una organización humanista fundamentada en la filosofía de la acción. Con su forma de pensar y actuar, Vicente Ferrer fue capaz de transmitir su compromiso para erradicar las desigualdades y movilizar las conciencias, a la vez que involucraba a las personas en su propio cambio. Su forma de entender el desarrollo ha dado lugar a un modelo ejemplar en el marco de la cooperación.","https://www.fundacionvicenteferrer.org/es/sites/default/files/ce_019_0.jpg")
  //  	.then(console.log)
  //  	.catch(console.err)

 ProjectData.delete('5a1893bde884252f926ff43a')
 	.then(console.log)
 	.catch(console.err)

//  ProjectData.create('buy milk', false)
//      .then(task => ProjectData.delete(task._id)
//          .then(console.log))
//      .catch(console.err)