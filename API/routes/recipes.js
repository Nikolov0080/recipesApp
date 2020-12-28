var express = require('express');
var router = express.Router();
const { createRecipe } = require('../controllers/recipes/createRecipe');
const { authFooLogged } = require('../utils/authFoo');
const { getAllRecipesGet, getAllRecipesPost } = require('../controllers/recipes/getAllRecipes');
const { getRecipeDetails, postRecipeDetails } = require('../controllers/recipes/getRecipeDetails');
const { like } = require('../controllers/recipes/userActs/likes/like');
const { checkResponse } = require('../controllers/recipes/userActs/likes/checkResponse');
const { searchRecipe } = require('../controllers/recipes/searchRecipe');
const { getCategory } = require('../controllers/recipes/getCategory');
const { deleteRecipe } = require('../controllers/recipes/deleteRecipe');

router.get('/create-recipe', authFooLogged, (req, res) => {
    res.render('createRecipe')
}).post('/create-recipe', createRecipe);

router.get('/all-recipes', authFooLogged, getAllRecipesGet)
    .post('/all-recipes', getAllRecipesPost);

router.get('/recipe-details', authFooLogged, getRecipeDetails)
    .post('/recipe-details', postRecipeDetails);

router.delete('/delete-recipe/:id', deleteRecipe);

router.post('/get-category', getCategory);

router.post('/search-recipe', searchRecipe);

router.post('/like', like);

router.get('/check-likes', checkResponse);

module.exports = router;