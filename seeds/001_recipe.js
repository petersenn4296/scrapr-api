exports.seed = function(knex, Promise) {
    return knex('recipe').del()
      .then(function () {
        return knex('recipe').insert([
            {
                "url": 'www.google.com',
                "name": 'recipe name',
                "ingredients": ['1', '2'],
                "instructions": '1',
                "notes": ['1', '2']
            }
        ]).then(() => {
          return knex.raw("SELECT setval('recipe_id_seq', (SELECT MAX(id) FROM recipe))")
        });
      });
  };