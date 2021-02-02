import React, { useEffect, useState } from 'react'
import recipeDetails from '../../../controllers/recipes/GET/recipeDetails/index';
import CurrentRecipe from '../currentRecipe';
import Loading from '../../loading/index';

const RecipeDetails = (props) => {

    const recipeId = props.location.pathname.slice(-24)
  
    const [loading, setLoading] = useState(true);
    const [recipeData, setRecipeData] = useState(undefined);
    const [changed, setChanged] = useState(false);

    const getRecipe = (id) => {
        recipeDetails(id).then((resp => {
            setRecipeData(resp.data)

                setLoading(false);
          
        }));
    }

    if (changed) {
        getRecipe(recipeId);
        setChanged(false);
    }

    useEffect(() => {
        getRecipe(recipeId)
    }, [recipeId])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <CurrentRecipe data={recipeData} changed={setChanged} />
        </div>
    )
}

export default RecipeDetails;