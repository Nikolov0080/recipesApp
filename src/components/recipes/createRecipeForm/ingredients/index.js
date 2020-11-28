import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import NameOfIngredient from './name';
import Quantity from './quantity';
import IngredientType from '../ingredients/typeDropdown/index';

const Ingredients = ({ func }) => {

    const ingredient = { ingredientName: "", quantity: "", type: "" }

    const [currentIngredients, setCurrentIngredients] = useState([{
        ingredientName: "", quantity: "", type: ""
    }]);


    const addOne = () => {
        setCurrentIngredients([...currentIngredients, ingredient]);

        console.log(currentIngredients)
    }

    const handleChangeInput = (index, event) => {
        // make it beautiful !!!
        console.log(event.target.value)
        var values = [...currentIngredients];
        values[index][event.target.name] = event.target.value
        console.log(index)
        func(values)
    }


    return (
        <div>

            {currentIngredients.map(({ ingredientName, quantity, type }, index) => {
                return (

                    <div key={index} >
                        {/* todo here too lol  */}
                        <NameOfIngredient func={handleChangeInput} index={index} />
                        <Quantity />
                        <IngredientType />
                    </div>
                )

            })}

            <Button size="lg" onClick={addOne}>+</Button>

        </div>
    )
}

export default Ingredients
