import React from 'react'
import { Table } from 'react-bootstrap';
import style from './index.module.css';
import { CSSTransitionGroup } from 'react-css-transition' // ES6

const IngredientsList = ({ data, func, show }) => {

    if (!show) {
        return (
            <div>
                <hr />
                <div className={style.ingredients_head} onClick={() => func('ingredients')}>
                    <h2>Ingredients <span>&#8595;</span></h2>
                </div>
            </div>
        )
    }

    return (
        <div>
            <hr />
            <div className={style.ingredients_head} onClick={() => func('ingredients')}>
                <h2>Ingredients <span>&#8595;</span></h2>
            </div>
            <CSSTransitionGroup >
                <Table className="text-center" bordered hover>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ ingredientName, quantity, type }, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ingredientName}</td>
                                    <td>{quantity}</td>
                                    <td>{type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </CSSTransitionGroup>

        </div>
    )
}

export default IngredientsList;