import React from 'react'
import style from './index.module.css';

const IngredientType = ({ func, index,val }) => {

    return (
        <div className={style.type_box}>

            <select onChange={(e) => func(index, e)}
            className={style.select_menu}
            value={val}
            name="type"
            >
                <option value="" > Select type</option>
                <option value="kilograms" > Kilograms</option>
                <option value="grams" > Grams</option>
                <option value="milLitre" > Milliliters</option>
                <option value="liters" > Table spoon</option>
                <option value="teaCups" >Tea cups</option>
                <option value="teaSpoons" >Tea spoon</option>
                <option value="tableSpoon" > Table spoon</option>
                <option value="onces" > Onces</option>
                <option value="pounds" > Pounds</option>
            </select>
        </div>
    )
}

export default IngredientType;