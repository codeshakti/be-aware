'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrgModel = new Schema({
    CompanyName: String,
    website: String,
    NIF: String,
    country: String,
    telephone: Number,
    country: String,
    zipCode: String,
    projects: [{
      type: Schema.ObjectId, ref: 'project' 
    }]

})



//exportamos el modelo

module.exports = mongoose.model('Org', OrgModel)