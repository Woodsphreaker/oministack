exports.up = function (knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments().primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable() // foreign

    table.foreign('ong_id').references('id').inTable('ongs') // FK References
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('incidents')
}
