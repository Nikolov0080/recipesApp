import React from 'react'
import data from './dataList';

const NameOfIngredient = ({ func, index }) => {
    return (
        <div>
            <input onChange={(e) => func(index, e)}
                className="shadow-lg p-3 mb-5 bg-white rounded"
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