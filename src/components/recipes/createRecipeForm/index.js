import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import Input from '../../common/input/input';
import Ingredients from './ingredients';
import RecipeBox from './recipeBox';
import Steps from '../../recipes/createRecipeForm/steps/index';
import TimeInput from './timeInput/index';
import Category from './category/index';
import Difficulty from './difficulty/index';
import Description from './description/index';
import ImageInput from './imageInput/index';
import createRecipeFunc from '../../../controllers/recipes/POST/createRecipe/index';
import Context from '../../../context/userContext';



const CreateRecipeInputs = () => {
    const context = useContext(Context)
    const userId = context.user._id;

    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [category, setCategory] = useState('special');

    const [difficulty, setDifficulty] = useState(1);

    const [description, setDescription] = useState('');

    const [file, setFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        createRecipeFunc(
            recipeName,
            ingredients,
            prepTime,
            cookTime,
            directions,
            difficulty,
            category,
            description,
            file,
            userId
        ).then(console.log)

    }
    /*
    TODO
    create special inputs for the [prep] and [cook] time ----

    [directions] and [description];
    Handle file upload !
    */
    return (
        <div>
            <RecipeBox>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Input name="recipeName" func={setRecipeName} label="RecipeName" type="text" />
                    <Ingredients func={setIngredients} />
                    <Steps func={setDirections} />
                    <div className="form-inline">
                        <TimeInput func={setPrepTime} label="Prep time:" id="Prep_time" /> {/* PREP TIME INPUT */}
                        <TimeInput func={setCookTime} label="Cook time:" id="Cook_time" /> {/* COOK TIME INPUT */}
                    </div>
                    <Category func={setCategory} />
                    <Difficulty func={setDifficulty} />
                    <Description func={setDescription} />

                    <ImageInput file={file} func={setFile} />
                    <Button type="submit">Create !</Button>
                </form >
            </RecipeBox>

        </div>
    )
}

export default CreateRecipeInputs;