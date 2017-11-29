'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectModel = new Schema({

companyname: String,
projectname: String,
website: String,
country: String,
city: String,
telephone: String,
category : String,
description: String,
image: String,
org: [{
      type: Schema.ObjectId, ref: 'Org' 
    }],
users: [{
  type: Schema.ObjectId, ref: 'User' 
}],
})

module.exports = mongoose.model('Project', ProjectModel)




