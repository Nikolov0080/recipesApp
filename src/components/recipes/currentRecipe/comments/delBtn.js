import React from 'react';
import { Button } from 'react-bootstrap';
import deleteRecipe from '../../../../controllers/recipes/DELETE/deleteComment';
const DelBtn = ({ id }) => {

    const handleClick = (id) => {
        deleteRecipe('a','d')
    }

    return (
        <div>
            <Button onClick={() => handleClick(id)} variant="danger">Delete</Button>
        </div>
    )
}

export default DelBtn
