var express = require('express');
var router = express.Router();
const { createRecipe } = require('../controllers/recipes/createRecipe');
const { authFooLogged } = require('../utils/authFoo');
const { getAllRecipesGet, getAllRecipesPost } = require('../controllers/recipes/getAllRecipes');
const { getRecipeDetails, postRecipeDetails } = require('../controllers/recipes/getRecipeDetails');
const { like } = require('../controllers/recipes/userActs/like');
const { checkResponse } = require('../controllers/recipes/userActs/checkResponse');

router.get('/create-recipe', authFooLogged, (req, res) => {
    res.render('createRecipe')
}).post('/create-recipe', createRecipe);

router.get('/all-recipes', authFooLogged, getAllRecipesGet)
    .post('/all-recipes', getAllRecipesPost);

router.get('/recipe-details', authFooLogged, getRecipeDetails)
    .post('/recipe-details', postRecipeDetails);

router.post('/like', like);

router.get('/check-likes', checkResponse);

module.exports = router;