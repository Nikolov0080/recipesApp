import React, { useEffect } from 'react';
import style from './index.module.css';
import likeRecipe from "../../../../../controllers/recipes/POST/likeRecipe/index";
import checkForLikes from '../../../../../controllers/recipes/GET/checkForLikes/index';

const Like = ({ current, func, recipeId, userId }) => {

    const handleClick = () => {
        likeRecipe(recipeId, userId).then(response => {
            response.data === "liked" ? func(true) : func(false);
        })
    }

    useEffect(() => {
        checkForLikes(recipeId,userId).then(response => {
            response.data === true ? func(true) : func(false)
        })
    }, [recipeId, func,userId]);


    return (
        <div>
            <div className={style.box} onClick={handleClick}>
                {current === true ?
                    <span className={style.liked}>
                        <h4>You like this recipe!</h4>
                     &#9825;
                    </span>
                    :
                    <span className={style.not_liked}>
                        <h4>Click here to like!</h4>
                        &#9825;</span>}
            </div>
        </div>
    )
}

export default Like;