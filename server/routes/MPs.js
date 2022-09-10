const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:sortBy', (req, res) => {
  const { sortBy } = req.params
  db.getMPs(sortBy)
    .then((MPs) => {
      res.json(MPs)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const MP = req.body
  db.addMP(MP)
    .then((MP) => {
      res.json(MP)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
