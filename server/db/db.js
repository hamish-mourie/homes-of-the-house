const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMPs,
  addMP,
}

function getMPs(sortBy, db = connection) {
  if (sortBy === 'fullName') {
    return db('mps').select().orderBy('mps.fullName', 'asc')
  } else if (sortBy === 'politicalParty') {
    return db('mps')
      .select()
      .orderBy('mps.politicalParty', 'asc')
      .orderBy('mps.totalPropertiesOwned', 'desc')
  } else {
    return db('mps')
      .select()
      .orderBy('mps.totalPropertiesOwned', 'desc')
      .orderBy('mps.politicalParty', 'asc')
  }
}

function addMP(MP, db = connection) {
  return db('mps').insert(MP)
}
