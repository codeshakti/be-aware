'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectModel = new Schema({

CompanyName: String,
url: String,
country: String,
acceptingDonations: Boolean,
category : String,
text: String,
image: String,
org: [{
      type: Schema.ObjectId, ref: 'Org' 
    }],
users: [{
  type: Schema.ObjectId, ref: 'User' 
}],
})

module.exports = mongoose.model('Project', ProjectModel)


