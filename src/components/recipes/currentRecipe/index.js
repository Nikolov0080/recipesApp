import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import style from './index.module.css';
import IngredientsList from './ingredientsList/index';
import DirectionsList from './directionsList/index';
import RecipeData from './recipeData';
import UserActs from './userActs/index';
import deleteRecipe from '../../../controllers/recipes/DELETE/deleteRecipe';
import Context from '../../../context/userContext';
import Comments from './comments/index';
import AddComment from './addComment/index';
import { useHistory } from 'react-router-dom';

const CurrentRecipe = ({ data }) => {

    const context = useContext(Context);
    const history = useHistory()
    const currentUsedId = context.user._id;
    const recipeCreator = data.creatorId;
    const isCreator = !!(currentUsedId === recipeCreator)
    const [showIng, setShowIng] = useState(false);
    const [showDir, setShowDir] = useState(false);

    const handleDelete = () => {
        deleteRecipe(recipeCreator, data._id).then(resp => {
            if (resp.statusText === "OK") {
                console.log(resp)
                history.goBack();
            } else {
                // TODO handle err page!
            }
        })
    }

    const handleShowHide = (menuName) => {
        if (menuName === 'ingredients') {
            setShowIng(!showIng);
        } else if (menuName === 'directions') {
            setShowDir(!showDir);
        }
    }

    const ingredients = JSON.parse(data.ingredients);
    const directions = JSON.parse(data.directions);

    return (
        <div>
            <div className="row justify-content-center">

                <Button onClick={() => history.goBack()} size="lg" variant="danger" > <span>&#8249;</span> Back</Button>

                {isCreator === true
                    ?
                    <Button size="lg" variant="danger" onClick={handleDelete}> <span>&#8249;</span> Delete</Button>
                    : ''
                }
            </div>
            <Row >

                <h2 className={style.name}>{data.recipeName}</h2>

                <Col lg={5}>
                    <img className={style.current_image} src={data.image} alt="ciganin" />
                </Col>
                <Col >
                    <RecipeData
                        description={data.description}
                        prepTime={data.prepTime}
                        cookTime={data.cookTime}
                        difficulty={data.difficulty}
                    />
                </Col>
            </Row>

            <IngredientsList data={ingredients} func={handleShowHide} show={showIng} />
            <DirectionsList data={directions} func={handleShowHide} show={showDir} />
            <Comments />
            <AddComment />
            <UserActs recipeId={data._id} />
        </div>
    )
}

export default CurrentRecipe;