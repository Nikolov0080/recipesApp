import React from 'react'
import { Card } from 'react-bootstrap';
import style from './recipe.module.css';
import SpinningAnimation from '../animations/spinning/index';

const Recipe = ({ func, data }) => {
    return (
        <div >
            <Card onClick={() => func(data)} className={style.recipe_box} >
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
        </div>
    )
}

export default Recipe;