'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    image: String,
        projects: [{
          type: Schema.ObjectId, ref: 'Project' 
        
        }],
        org: [{
            type: Schema.ObjectId, ref: 'Org'
    }]

})



//exportamos el modelo

module.exports = mongoose.model('User', UserModel)