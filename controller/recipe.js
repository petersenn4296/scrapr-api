const model = require('../model/recipe.js')

const getAll = (req, res, next)  => {
    console.log('getAll');
    model.getAll()
    .then(data => {
        res.json(data)
    })
}

const getOne = (req, res, next)  => {
    console.log('getOne');
    model.getOne(req.params.id)
    .then(data => {
        res.json(data)
    })
}

const createRecipe = (req, res, next)  => {
    console.log('createRecipe');
    model.createRecipe(req.body.url, req.body.name, req.body.ingredients, req.body.instructions, req.body.notes)
    .then(data => {
        res.json(data)
    })
}

function getByCategory(req, res, next) {
    console.log('getByCategory');
    model.getByCategory(req.params.category_id)
    .then(data => {
        res.json(data)
    })
}

module.exports = {
    getAll,
    getOne,
    createRecipe,
    getByCategory
}