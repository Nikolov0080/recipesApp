import React from 'react'
import { Button, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap';
import style from './index.module.css';
import RecipeData from './recipeData';

const CurrentRecipe = ({ func, data }) => {

    const ingredients = JSON.parse(data.ingredients)
    const directions = JSON.parse(data.directions)
    console.log(data)
    return (
        <div>

            <Row >
                <Col lg={5}>
                    <img className={style.current_image} src={data.image} />
                </Col>
                <Col >
                    <RecipeData
                        name={data.recipeName}
                        description={data.description}
                        prepTime={data.prepTime}
                        cookTime={data.cookTime}
                    />
                </Col>
            </Row>


            <Button onClick={func}>Back</Button>

        </div>
    )
}

export default CurrentRecipe;