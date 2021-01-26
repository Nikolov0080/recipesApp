import React from 'react';
import createdRecipes from '../../../controllers/user/GET/createdRecipes'

const CreatedRecipes = (props) => {

    const userId = props.location.pathname.replace("/created-recipes/", '');

    createdRecipes(userId);

    return (
        <div>
            Created recipes
        </div>
    )
}

export default CreatedRecipes;