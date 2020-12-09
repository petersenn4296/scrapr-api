const knex = require('../knex.js')

function getAll() {
    return knex('recipe').whereNull('category_id')
}

function getOne(id) {
    return knex('recipe').where('id', id)
}

function createRecipe(url, name, ingredients, instructions, notes) {
    return knex('recipe')
            .insert({
                "url": url,
                "name": name,
                "ingredients": ingredients,
                "instructions": instructions,
                "notes": notes,
            })
            .returning('*')
}

function getByCategory(category_id) {
    return knex('recipe').select('*').where('category_id', category_id)
}

module.exports = {
    getAll,
    getOne,
    createRecipe,
    getByCategory
}