import React from 'react'
import likedRecipes from '../../../controllers/user/GET/likedRecipes'
import Recipes from '../../../components/recipes/recipesList';
const LikedRecipes = (props) => {

    const userId = props.location.pathname.replace("/liked-recipes/", '');

    likedRecipes(userId)
    return (
        <div>
            {/* <Recipes recipes={}/> */}
        </div>
    )
}

export default LikedRecipes;