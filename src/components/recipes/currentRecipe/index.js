import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import style from './index.module.css';
import IngredientsList from './ingredientsList/index';
import DirectionsList from './directionsList/index';
import RecipeData from './recipeData';
import UserActs from './userActs/index';

const CurrentRecipe = ({ func, data }) => {

    const [showIng, setShowIng] = useState(false);
    const [showDir, setShowDir] = useState(false);

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
                <Button className=" m-3" size="lg" variant="danger" onClick={func}> <span>&#8249;</span> Back</Button>
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
            <UserActs recipeId={data._id} />
        </div>
    )
}

export default CurrentRecipe;