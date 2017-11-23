'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    telephone: Number,
    country: String,
    NIE: String,
    projects: [{
      type: Schema.ObjectId, ref: 'users' 
    }]

})



//exportamos el modelo

module.exports = mongoose.model('User', UserModel)