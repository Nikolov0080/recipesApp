const recipeSchema = require('../../models/recipes/recipeSchema');
const jwt = require('../../utils/jwt');
const { upload } = require('../../utils/multerConf');
const { saveRecipeImage } = require('../../utils/cloudinary/saveRecipeImage');
const { recipesValidations } = require('../../validations/recipes');
const { updateUserRecipes } = require('../user/updateUser');

module.exports.createRecipe = (req, res, next) => {
console.log(req.headers)
    const creatorId = jwt.decodeToken(req.headers['auth'])._id;
    console.log(creatorId)
    upload.single('image')(req, res, (err) => {
        
        const isValid = recipesValidations(req.body);

        if (isValid) {
            return res.send(isValid);
        }

        if (!req.file) {
            return res.send('select image');
        }

        if (err) {
            console.log(err)
            res.render('error', { err });
        } else {
            const image = req.file;

            const {
                recipeName,
                ingredients,
                prepTime,
                cookTime,
                directions,
                difficulty,
                category,
                description
            } = req.body;

            function saveRecipe(imageURL) {
                return recipeSchema.create({
                    recipeName,
                    ingredients,
                    prepTime,
                    cookTime,
                    directions,
                    difficulty,
                    creatorId,
                    category,
                    description,
                    image: imageURL
                });
            }

            saveRecipeImage(image.filename).then(resp => {
                // resp === imageURL from the cloudinary response...

                saveRecipe(resp).then((dbResponse) => {

                    if (dbResponse) { // if error return error query ... just to test the API for now
                        updateUserRecipes(creatorId, 'userRecipes', dbResponse._id);// updates ObjectId array! (user's recipes)
                        res.redirect('/api/recipes/create-recipe?created');
                    } else {
                        res.redirect('/api/recipes/create-recipe?error');
                    }
                });

            }).catch((e) => {
                console.log(e);
            });
        }
    });
}