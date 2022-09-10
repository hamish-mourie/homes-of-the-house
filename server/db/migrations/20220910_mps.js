exports.up = (knex) => {
  return knex.schema.createTable('mps', (table) => {
    table.increments('id').primary()
    table.string('fullName')
    table.string('politicalParty')
    table.integer('totalPropertiesOwned')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('mps')
}
