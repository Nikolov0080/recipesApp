import React from 'react'
import { Table } from 'react-bootstrap';
import style from './index.module.css';

const IngredientsList = ({ data }) => {

    console.log(data)

    return (
        <div>
            <hr />
            <Table className="text-center" bordered hover>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ ingredientName, quantity,type }, index) => {
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
        </div>
    )
}

export default IngredientsList;