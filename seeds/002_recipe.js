exports.seed = function(knex, Promise) {
    return knex('recipe').del()
      .then(function () {
        return knex('recipe').insert([
            {
                "url": 'www.google.com',
                "name": 'breakfast 1',
                "ingredients": ['1', '2'],
                "instructions": '1',
                "notes": ['1', '2'],
                "category_id": '1'
            },
            {
              "url": 'www.google.com',
              "name": 'dinner 1',
              "ingredients": ['1', '2'],
              "instructions": '1',
              "notes": ['1', '2'],
              "category_id": '2'
          },
          {
            "url": 'www.google.com',
            "name": 'drinks 1',
            "ingredients": ['1', '2'],
            "instructions": '1',
            "notes": ['1', '2'],
            "category_id": '3'
        },
        {
          "url": 'www.google.com',
          "name": 'no category 1',
          "ingredients": ['1', '2'],
          "instructions": '1',
          "notes": ['1', '2'],
          "category_id": null
      },
      {
        "url": 'www.google.com',
        "name": 'drinks 2',
        "ingredients": ['1', '2'],
        "instructions": '1',
        "notes": ['1', '2'],
        "category_id": '3'
    }
        ]).then(() => {
          return knex.raw("SELECT setval('recipe_id_seq', (SELECT MAX(id) FROM recipe))")
        });
      });
  };