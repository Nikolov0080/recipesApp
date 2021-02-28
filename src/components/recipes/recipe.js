import React from 'react'
import { Card } from 'react-bootstrap';
import style from './recipe.module.css';
import SpinningAnimation from '../animations/spinning/index';
import { BrowserRouter } from 'react-router-dom';

const Recipe = ({ data }) => {

    return (
        <div >
            <BrowserRouter>
                <a href={'/recipe-details/recipe_id=' + data._id}>
                    <Card className={style.recipe_box} >
                        <Card.Img className={style.image_box} variant="top" src={data.image} />
                        <Card.Body>
                            <Card.Title>{data.recipeName}</Card.Title>
                            <Card.Text>
                                {data.description.substr(0, 70) + "..."}
                                <br />

                                <SpinningAnimation difficulty={data.difficulty} />

                                <span className={style.likes}>&#9829; {(data.likes.length / 2)}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </BrowserRouter>

        </div>
    )
}

export default Recipe;