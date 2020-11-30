import React, { useState } from 'react';
import { Alert, Button } from "react-bootstrap";
import NameOfIngredient from './name';
import Quantity from './quantity';
import IngredientType from '../ingredients/typeDropdown/index';
import style from './index.module.css';
import DeleteButton from './deleteBtn';

const Ingredients = ({ func }) => {

    const ingredient = { ingredientName: "", quantity: "", type: "" }

    const [currentIngredients, setCurrentIngredients] = useState([{
        ingredientName: "", quantity: "", type: ""
    }]);

    const handleChangeInput = (index, event) => {
        // make it beautiful !!!
        console.log(event.target.value)
        var values = [...currentIngredients];
        values[index][event.target.name] = event.target.value
        console.log(index)
        func(values)
    }

    const addOne = () => {
        setCurrentIngredients([...currentIngredients, ingredient]);
        func(currentIngredients)
    }

    const removeIngredient = (index, e) => {
        e.preventDefault()
        console.log(index)
        const values = [...currentIngredients]
        values.splice(index, 1);
        setCurrentIngredients(values);
        func(values)
    }


    return (
        <div>
            <hr />
            <h3>INGREDIENTS</h3>
            <p>Add or remove ingredients from the list</p>
            {currentIngredients.map(({ ingredientName, quantity, type }, index) => {
                return (
                    <div key={index} className={style.ingredient_box}>
                        <div className="form-inline" >
                            <NameOfIngredient func={handleChangeInput} index={index} val={ingredientName} />
                            <Quantity func={handleChangeInput} index={index} val={quantity} />
                            <IngredientType func={handleChangeInput} index={index} val={type} />
                            {/* create custom delete button  */}
                            {currentIngredients.length > 1 ?
                                <DeleteButton func={removeIngredient} index={index} />
                                : ''
                            }
                        </div>
                    </div>
                )
            })}
            <Button variant="outline" size="lg" onClick={addOne}>+ New ingredient</Button>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default Ingredients;