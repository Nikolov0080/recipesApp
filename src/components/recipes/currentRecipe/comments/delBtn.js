import React from 'react';
import { Button } from 'react-bootstrap';
import deleteRecipe from '../../../../controllers/recipes/DELETE/deleteComment';

const DelBtn = ({ commentId, recipeId,changed }) => {

    const handleClick = () => {
        deleteRecipe(recipeId,commentId).then(()=>{
            setTimeout(()=>{

                changed(true);
            },400)
        })
    }

    return (
        <div>
            <Button onClick={() => handleClick()} variant="danger">Delete</Button>
        </div>
    )
}

export default DelBtn;