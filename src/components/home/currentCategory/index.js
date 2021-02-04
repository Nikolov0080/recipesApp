import React from 'react';
import style from './index.module.css';
import Pagination from '../../pagination/index';
import {  Button } from 'react-bootstrap';

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

                <Pagination allRecipes={recipesArray}/>
             
            </div>
        </div>

    )
}

export default CurrentCategory;