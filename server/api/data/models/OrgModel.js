'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrgModel = new Schema({

    CompanyName: String,
    website: String,
    NIF: String,
    country: String,
    telephone: Number,
    zipCode: String,
    logo: String,
    category: String,
    description: String,
    project: [{
      type: Schema.ObjectId, ref: 'Project' 
    }],
     users: [{
      type: Schema.ObjectId, ref: 'User' 
    }]

})



//exportamos el modelo

module.exports = mongoose.model('Org', OrgModel)