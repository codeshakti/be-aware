'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usermodel = new Schema({
    name: String,
    surnames: String,
    email: String,
    telephone: Number,
})



//exportamos el modelo

module.exports = mongoose.model('User', usermodel)