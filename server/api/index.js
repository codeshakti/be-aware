require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const UserData = new (require('./data/UserData.js'))
const ProjectData = new (require('./data/ProjectData.js'))
const OrgData = new (require('./data/OrgData.js'))
const router = express.Router()


router.route('/users')
  .get((req, res) => {
    UserData.list()
      .then(users => {
        res.json({
          status: 'OK',
          message: 'users listed successfully',
          data: users
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err
        })
      })
  })

  .post((req, res) => {
    const {firstname, lastname, email, country, image, password, confirm_password} = req.body
    console.log(req.body)
    UserData.create(firstname, lastname, email, country, image, password, confirm_password)
      .then(users => {
        res.json({
          status: 'OK',
          message: 'users created successfully',
          data: users
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })


router.route('/users/:id')
  .get((req, res) => {
    const { id } = req.params
    console.log('retrieve id ->', id)
    UserData.retrieve(id)
      .then(user => {
        console.log('retrieve user ->', user)
        res.json({
          status: 'OK',
          message: 'user retrieved successfully',
          data: user
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })

router.route('/projects')
  .get((req, res) => {

    ProjectData.list()
      .then(projects => {
        res.json({
          status: 'OK',
          message: 'projects listed successfully',
          data: projects
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })
  .post((req, res) => {
    const {CompanyName, ProjectName, website, country, city, telephone, category, description, image, id} = req.body
    ProjectData.create(CompanyName, ProjectName, website, country, city, telephone, category, description, image, id)
      .then(projects => {
        res.json({
          status: 'OK',
          message: 'projects created successfully',
          data: projects
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })

  .delete((req, res) => {
    const {_id} = req.query
    console.log(_id)
    ProjectData.delete(_id)
      .then(projects => {
        res.json({
          status: 'OK',
          message: 'projects deleted successfully',
          data: projects
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })

router.route('/orgs/:id')
  .get((req, res) => {
    const { id } = req.params
    console.log('retrieve id ->', id)
    OrgData.retrieve(id)
      .then(orgs => {
        console.log('retrieve org ->', orgs)
        res.json({
          status: 'OK',
          message: 'org retrieved successfully',
          data: orgs
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })
  .post((req, res) => {
    const {CompanyName, website, NIE, country, telephone, zipCode, logo, category, description} = req.body
    OrgData.create(CompanyName, website, NIE, country, telephone, zipCode, logo, category, description)
      .then(projects => {
        res.json({
          status: 'OK',
          message: 'orgs created successfully',
          data: projects
        })
      })
      .catch(err => {
        res.json({
          status: 'KO',
          message: err.message
        })
      })
  })

// router.route('/orgs/:id/projects')
//   .get((req, res) => {
//     const { id } = req.params
//     console.log('retrieve id ->', id)
//     OrgData.retrieve(id)
//       .then(orgs => {
//         console.log('retrieve org ->', orgs)
//         res.json({
//           status: 'OK',
//           message: 'org retrieved successfully',
//           data: orgs
//         })
//       })
//       .catch(err => {
//         res.json({
//           status: 'KO',
//           message: err.message
//         })
//       })
//   })

// /orgs/:id/projects --> listar projects de org id


app.use('/api', router)

console.log(`Connecting Tasks API db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log(`Starting Tasks API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Tasks API is up'))

process.on('SIGNIT', () => {
  console.log('\nStopping Tasks API...')

  process.exit()
})