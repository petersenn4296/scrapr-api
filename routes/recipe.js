const express = require('express');
const router = express.Router();
const controller = require('../controller/recipe.js');

router.get('/all', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/create', controller.createRecipe)
router.get('/category/:category_id', controller.getByCategory);

module.exports = router