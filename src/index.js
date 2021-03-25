const express = require('express')
const app = express()
const path = require('path')

const PORT = 80

//Views config
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//Routes
app.use(require('./routes/index.routes'))

//Server
app.listen(PORT, () => {
  console.log('server on port', PORT)
})