// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3005;

// const cors = require('cors')
// const request = require('request')
// require('dotenv').load()

// const { URL_BASE } = process.env


// app.use(cors())

// const options = {
//   headers: {
//     'User-Agent': 'request'
//   }
// }

// app.get('*', (req, res) =>{
// 	const urlRequested = req.originalUrl
//   console.log('-'.repeat(20))
//   console.log('path requested = ' + urlRequested)
//   if (urlRequested.includes('favicon.ico')) {
//     res.status(500).send("Couldn't get a JSON!")
//   }
// 	options.url = URL_BASE + urlRequested
// 	console.log('petititon',options.url )
// 	request(options, function (error, response, body) {
//     if (error) res.status(500).send('Something went wrong!')
//     const json = JSON.parse(body)
//     res.json(json)
//   })
// })

// app.listen(port);

// console.log('API server started on: ' + port);