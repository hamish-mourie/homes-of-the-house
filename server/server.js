const path = require('path')
const express = require('express')

const MPs = require('./routes/MPs')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/MPs', MPs)

module.exports = server
