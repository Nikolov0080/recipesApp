const recipeSchema = require('../../../models/recipes/recipeSchema');
const userSchema = require('../../../models/user/userSchema');
const { checkForLikes } = require('./checkForLikes');

module.exports.like = (req, res) => {

  const userId = req.body.user_id
  const recipeId = req.body.recipe_id

  /*
   TODO
        done  1. create check do the user already like the current recipe and return data
        done  2. remove like on click
        3. create function that sends data for the recipe status
        (can be reusable to be used for favorites too !)
         4. do the same for favorites !
  */

  checkForLikes(recipeId).then(resp => {

    if (!resp.liked) { // save like in Recipe and User objects
      Promise.all([addToRecipe(), addToUser()])
        .then(result => { console.log("Recipe liked!");
        return res.send('liked');
      })
        .catch(err => { console.log(err); })

    } else { // unlike TODO
      Promise.all([unlikeUser(), unlikeRecipe()])
        .then(result => { console.log("Recipe unliked!"); 
        return res.send('unliked');
      })
        .catch(err => { console.log(err); })
    }

  }).catch(err => { res.send("something went wrong...") })

  function unlikeUser() {
    userSchema.updateOne({ _id: userId },
      { $pull: { likedRecipes: recipeId } }, (err, success) => {
        if (err) {
          console.log(err)
        }
      })
  }

  function unlikeRecipe() {
    recipeSchema.updateOne({ _id: recipeId },
      { $pull: { likes: userId } }, (err, success) => {
        if (err) {
          console.log(err)
        }
      })
  }

  async function addToRecipe() {
    return await recipeSchema.findOneAndUpdate({
      _id: req.body.recipe_id
    },
      { $push: { likes: userId } },
      (err, success) => {
        if (err) {
          console.log(err)
        }
      }
    )
  }

  async function addToUser() {
    return await userSchema.findOneAndUpdate({
      _id: req.body.user_id
    },
      { $push: { likedRecipes: recipeId } },
      (err, success) => {
        if (err) {
          console.log(err)
        }
      })
  }

  // res.send();
}