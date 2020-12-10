import React from 'react';
import style from './index.module.css';
import likeRecipe from "../../../../../controllers/recipes/POST/likeRecipe/index";

const Like = ({ current, func, recipeId ,userId}) => {
    // TODO - HANDLE DB CALL AND RETURN

    const handleClick = () => {

        likeRecipe(recipeId,userId).then()
        func(!current)
    }

    return (
        <div>
            <div className={style.box} onClick={handleClick}>
                {current === true ?
                    <span className={style.liked}>&#9825;</span>
                    :
                    <span className={style.not_liked}>&#9825;</span>}

            </div>
        </div>
    )
}

export default Like;