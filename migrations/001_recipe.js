exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(table) {
        table.increments('id');
        table.string('url', 1000).defaultTo('');
        table.string('name').defaultTo('');
        table.specificType('ingredients', 'varchar(100000) ARRAY');
        table.string('instructions', '100000');
        table.specificType('notes', 'varchar(100000) ARRAY');
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe').onDelete('CASCADE')
};