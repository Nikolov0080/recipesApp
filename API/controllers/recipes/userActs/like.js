const recipeSchema = require('../../../models/recipes/recipeSchema');
const userSchema = require('../../../models/user/userSchema');
const { checkForLikes } = require('./checkForLikes');

module.exports.like = (req, res) => {

    console.log()
    const userId = req.body.user_id
    const recipeId = req.body.recipe_id


    /*
     TODO
            1. create check do the user already like the current recipe and return data
            2. remove like on click
            3. do the same for favorites !
    */

    checkForLikes(recipeId).then(resp => {
        console.log(resp)

        if (!resp.liked) { // save like in Recipe and User objects
            addToRecipe();
            addToUser();
        }else{ // unlike

        }
    }).catch(err => {
        res.send("something went wrong...")
    })

    function addToRecipe() {
        //   recipeSchema.findOneAndUpdate({
        //       _id: req.body.recipe_id
        //   },
        //       { $push: { likes: userId } },
        //       (err, success) => {
        //           if (err) {
        //               console.log(err)
        //           }
        //           console.log(success)
        //       }
        //   )
    }

    function addToUser() {

        //   userSchema.findOneAndUpdate({
        //       _id: req.body.user_id
        //   },
        //       { $push: { likedRecipes: recipeId } },
        //       (err, success) => {
        //           if (err) {
        //               console.log(err)
        //           }
        //           console.log(success)
        //       })
    }




    res.send();
}