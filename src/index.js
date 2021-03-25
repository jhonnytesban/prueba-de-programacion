const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

const PORT = 80

//Static Files
app.use(express.static(path.join(__dirname, '../public')))

//Views config
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//Routes
app.use(require('./routes/index.routes'))

//Conexion a mongo
const uri = `mongodb+srv://usuario:usuario@cluster0.ayj0j.mongodb.net/prueba?retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to the DataBase')
})
.catch(e => console.log(e))

//Server
app.listen(PORT, () => {
  console.log('server on port', PORT)
})