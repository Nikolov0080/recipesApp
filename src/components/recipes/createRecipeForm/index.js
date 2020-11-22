import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Input from '../../common/input/input';

const CreateRecipeInputs = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [prepTime, setPrepTime] = useState(0);
    const [directions, setDirections] = useState([]);
    const [difficulty, setDifficulty] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(recipeName) // test
    }
    /*
    TODO
    create special inputs for the [prep] and [cook] time
    create special input fields for the [ingredients] ,
    [directions] and [description];
    Handle file upload !
    */
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input name="recipeName" func={setRecipeName} label="RecipeName" type="text" />
                <Button type="submit">Create !</Button>
            </form >
        </div>
    )
}

export default CreateRecipeInputs