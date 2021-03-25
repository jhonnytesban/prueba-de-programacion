const mongoose = require('mongoose')
const Schema = mongoose.Schema

const numberSchema = new Schema({
  number: Number
})

const Peticion = mongoose.model('Peticion', numberSchema)

module.exports = Peticion