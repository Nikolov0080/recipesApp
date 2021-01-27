
import React, { useState, useEffect } from 'react';
import likedRecipes from '../../../controllers/user/GET/likedRecipes';
import Recipes from '../../../components/recipes/recipesList';

const LikedRecipes = (props) => {

    const userId = props.location.pathname.replace("/liked-recipes/", '');

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const reducer = (acc, cVal) => {
            // todo fix the bug with all the recipes here
            if (acc.length > 0) {
                acc.map((current) => {
                    if (!JSON.stringify(acc).includes(cVal._id)) {
                        acc.push(cVal);
                    }
                    return acc
                })
            } else {
                acc.push(cVal)
            }

            return acc;
        }

        likedRecipes(userId).then((resp) => {
            const filtered = resp.data.reduce(reducer, []);

            console.log(filtered)
            setRecipes(filtered)
        })
    }, [userId]);

    return (
        <div>
            <Recipes recipes={recipes} />
        </div>
    )
}

export default LikedRecipes;