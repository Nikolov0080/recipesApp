import React from 'react';
import style from './index.module.css';
import Recipe from '../../recipes/recipe';
import { Col, Row, Button } from 'react-bootstrap';

const CurrentCategory = ({ show,  categorySelected }) => {

    const { category, recipesArray } = categorySelected;

    if (!recipesArray) {
        return (
            <div className={style.container}>
                <h1 className="text-center">{categorySelected.category}</h1>
                <Button onClick={()=>show(undefined)} className={style.hide_btn}>X</Button>
                <h1 className={style.cat}>No recipes...</h1>

            </div>
        )
    }

    return (
        <div>
            <div className={style.container}>
                <Button onClick={()=>show(undefined)} className={style.hide_btn}>X</Button>
                {/* Clears current category */}
                <h1 className={style.cat}>{category}</h1>
                <Row>
                    {recipesArray.map((data, index) => {
                        return (
                            <Col key={index}>
                                <Recipe  data={data} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>

    )
}

export default CurrentCategory;