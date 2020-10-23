const knex = require('../knex.js')

function getAll() {
    return knex('recipe')
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
                "notes": notes
            })
            .returning('*')
}

module.exports = {
    getAll,
    getOne,
    createRecipe
}