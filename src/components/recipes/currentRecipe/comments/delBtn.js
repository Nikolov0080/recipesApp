import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import deleteRecipe from '../../../../controllers/recipes/DELETE/deleteComment';
import LoadingBtn from '../../../common/loadingBtn/index';

const DelBtn = ({ commentId, recipeId, changed }) => {

    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        deleteRecipe(recipeId, commentId).then(() => {
                changed(true);
                setLoading(false);
        })
    }

    if (loading) {
        return (
            <LoadingBtn />
        )
    }

    return (
        <div>
            <Button onClick={() => handleClick()} variant="danger">Delete</Button>
        </div>
    )
}

export default DelBtn;