import React from 'react'
import style from './recipeBox.module.css';

const RecipeBox = (props) => {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded mt-5 rounded">
            <div className={style.recipe_box}>
                {props.children}
            </div>
        </div>
    )
}

export default RecipeBox;