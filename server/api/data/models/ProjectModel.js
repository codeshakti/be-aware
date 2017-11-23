'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectModel = new Schema({

charityName: String,
donationUrl: String,
city: String,
country: String,
zipCode: String,
acceptingDonations: Boolean,
category : String,
text: String,
image: String,
})

module.exports = mongoose.model('Project', ProjectModel)


