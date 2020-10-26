const model = require('../model/recipe.js')

const getAll = (req, res, next)  => {
    console.log('getAll');
    model.getAll()
    .then(data => {
        res.json(data)
    })
}

const getOne = (req, res, next)  => {
    model.getOne(req.params.id)
    .then(data => {
        res.json(data)
    })
}

const createRecipe = (req, res, next)  => {
    model.createRecipe(req.body.url, req.body.name, req.body.ingredients, req.body.instructions, req.body.notes)
    .then(data => {
        res.json(data)
    })
}

module.exports = {
    getAll,
    getOne,
    createRecipe
}