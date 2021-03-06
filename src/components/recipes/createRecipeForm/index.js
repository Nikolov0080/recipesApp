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
import { useHistory } from 'react-router-dom';
import LoadingBtn from '../../common/loadingBtn/index';
import isValid from '../../../validations/recipes/createRecipe/index';
import ErrorMessage from '../../errorMessage/index';

const CreateRecipeInputs = () => {

    const context = useContext(Context)
    const userId = context.user._id;
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [category, setCategory] = useState('special');
    const [difficulty, setDifficulty] = useState(0);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [err, setErr] = useState('Fill the fields first');

    const toValidate = {
        recipeName: recipeName.toLowerCase(),
        ingredients,
        prepTime,
        cookTime,
        directions,
        difficulty,
        category,
        description,
        file
    }

    const validate = () => {
        setErr(isValid(toValidate))
    }

    const buttons = (err) => {

        if (loading) {
            return (<LoadingBtn />)
        }

        if (err || !recipeName) {
            return (
                <div>
                    <ErrorMessage text={err} variant={"info"} />
                    <br />
                    <Button size="lg" style={{ backgroundColor: "lightGray" }}
                        variant="disabled">Create</Button>
                </div>
            )
        }

        return (<Button size="lg" type="submit">Create !</Button>)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        createRecipeFunc(
            recipeName.toLowerCase(),
            ingredients,
            prepTime,
            cookTime,
            directions,
            difficulty,
            category,
            description,
            file,
            userId
        ).then((resp) => {
            console.log(resp);
            if (resp.status === 203) {
                setErr(resp.data);
            } else {
                setLoading(false);
                history.goBack();
            }
        })

    }

    return (
        <div onClick={() => validate()} onKeyPress={() => validate()} onChange={() => validate()}>
            <RecipeBox>
                <h1>Create new recipe</h1>
                {err !== false ? <ErrorMessage variant="info" text={err} /> : ''}
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
                    <br />
                    {buttons(err)}
                </form >
            </RecipeBox>

        </div>
    )
}

export default CreateRecipeInputs;