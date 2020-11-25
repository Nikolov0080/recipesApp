import React, { useState } from 'react';
import { Button } from "react-bootstrap";


const Ingredients = () => {

    const ingredient = { ingredientName: "", quantity: "", type: "" }

    const [ingredients, setIngredients] = useState([{
        ingredientName: "", quantity: "", type: ""
    }]);


    const addOne = () => {
        setIngredients([...ingredients, ingredient]);
    }

    console.log(ingredients)
    return (
        <div>

            {ingredients.map(({ ingredientName }) => {
                return (
                    <div>
{/*  TODO complete the form and the step form */}
                        <input />
                        <br />
                    </div>
                )

            })}

            <Button onClick={addOne}>+</Button>

        </div>
    )
}

export default Ingredients
