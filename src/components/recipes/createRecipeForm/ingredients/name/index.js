import React from 'react'
import data from './dataList';
import style from './name.module.css';

const NameOfIngredient = ({ func, index }) => {
    return (
        <div className={style.input_box}>
            <input onChange={(e) => func(index, e)}
                className={style.name}
                placeholder="Add ingredient"
                autoComplete="off"
                type="text" name="ingredientName" list="ingredientName"
            />
            <datalist id="ingredientName">
                {data.map((Ingredient, i) => {
                    return <option key={i} value={Ingredient} />
                })}
            </datalist>
            <br />
        </div>
    )
}

export default NameOfIngredient;