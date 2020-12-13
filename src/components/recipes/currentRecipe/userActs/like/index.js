import React, { useEffect } from 'react';
import style from './index.module.css';
import likeRecipe from "../../../../../controllers/recipes/POST/likeRecipe/index";
import checkForLikes from '../../../../../controllers/recipes/GET/checkForLikes/index';

const Like = ({ current, func, recipeId, userId }) => {
    // TODO - HANDLE DB CALL AND RETURN

    const handleClick = () => {

        likeRecipe(recipeId, userId).then(response=>{
            response.data === "liked" ? func(true) : func(false);
        })
    }

    useEffect(() => {
        checkForLikes(recipeId).then(response => {
            console.log(response.data)
            response.data === true ? func(true) : func(false)
        })
    }, [recipeId,func]);


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