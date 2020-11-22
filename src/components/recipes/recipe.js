import React from 'react'
import { Card } from 'react-bootstrap';
import style from './recipe.module.css';
import { LinkContainer } from 'react-router-bootstrap';

const Recipe = ({ data }) => {
    return (
        <div >
            <LinkContainer to="/my-recipes">
                <Card className={style.recipe_box} >
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.recipeName}</Card.Title>
                        <Card.Text>
                            {data.description.substr(0,70) + "..."}
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </div>
    )
}

export default Recipe;