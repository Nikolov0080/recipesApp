import React from 'react';
import style from './index.module.css';
import Recipe from '../../recipes/recipe';
import CurrentRecipe from '../../recipes/currentRecipe/index';
import { Col, Row } from 'react-bootstrap';

const CurrentCategory = ({ show, showFunc, categorySelected }) => {

    const { category, recipesArray } = categorySelected;
    // todo set more variables for recipes // no recipes

    const hideCurrentRecipe = () => {
        showFunc(false);
    }

    if (!recipesArray) {
        return (
            <div className={style.container}>
                <h1 className="text-center">{categorySelected.category}</h1>
                <h1>No recipes...</h1>
            </div>
        )
    }

    if (show) {
        return (
            <div>
                <h1 className={style.cat}>{category}</h1>
                <CurrentRecipe func={hideCurrentRecipe} data={show} />
            </div>

        )
    }

    return (
        <div className={style.container}>
            <h1 className={style.cat}>{category}</h1>

            <Row>
                {recipesArray.map((data, index) => {
                    return (
                        <Col key={index}>
                            <Recipe func={showFunc} data={data} />
                        </Col>
                    )
                })}
            </Row>
            <h1>{recipesArray.length}</h1>
        </div>
    )
}

export default CurrentCategory;