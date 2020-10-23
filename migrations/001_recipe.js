exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(table) {
        table.increments().notNullable()
        table.string('url').defaultTo('')
        table.string('name').defaultTo('')
        table.specificType('ingredients', 'text ARRAY');
        table.string('instructions');
        table.specificType('notes', 'text ARRAY');
        table.timestamps(true, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe').onDelete('CASCADE')
};