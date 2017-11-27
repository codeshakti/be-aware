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


router.route('/users/:id')
  .get((req, res) => {
    const id = req.params.id

    UserData.retrieve(id)
      .then(user => {
        console.log(user)
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

router.route('/orgs')
  .get((req, res) => {
    OrgData.list()
      .then(orgs => {
        res.json({
          status: 'OK',
          message: 'organizations listed successfully',
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