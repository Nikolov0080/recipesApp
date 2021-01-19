import React from 'react';
import { Button } from 'react-bootstrap';
import deleteRecipe from '../../../../controllers/recipes/DELETE/deleteComment';

const DelBtn = ({ commentId, recipeId }) => {

    const handleClick = () => {
        deleteRecipe(recipeId,commentId)
    }

    return (
        <div>
            <Button onClick={() => handleClick()} variant="danger">Delete</Button>
        </div>
    )
}

export default DelBtn
