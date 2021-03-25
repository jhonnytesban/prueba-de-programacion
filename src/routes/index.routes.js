const express = require('express')
const router = express.Router()
const Peticion = require('../model/peticiones')

router.get('/', async(req, res) => {
  const body = req.body
  try {
    const arrayNumber = await Peticion.find(body)
    res.render('index', {arrayNumber})
  } catch (error) {
    
  }
})

// router.post('/', async(req, res) => {
//   const body = req.body
//   try {
//     res.render('index', {body})
//   } catch (error) {
//     console.log(error)
//   }
// })

module.exports = router