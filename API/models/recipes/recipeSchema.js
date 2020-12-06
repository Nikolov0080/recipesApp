const mongoose = require('mongoose');
const { Schema } = mongoose;
const Model = mongoose.model;

const recipeSchema = new Schema({

    recipeName: {
        type: String,
        require: true
    },
    //TODO
    ingredients: { // make it array [  ingredients  ]
        type: String, /// walk on the three and make it array from the input
        require: true
    },
    prepTime: {
        type: String,
        require: true
    },
    cookTime: {
        require: true,
        type: String,
    },
    directions: { // make it array with "steps"
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {

    },

    likes: 0,
    comments: [],
    favorites: 0,

    creatorId: { type: "ObjectId", ref: "User" }

});


module.exports = new Model('Recipes', recipeSchema);