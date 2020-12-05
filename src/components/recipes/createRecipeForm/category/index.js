import React from 'react'
import list from './categoriesList';
import style from "./index.module.css";

const Category = ({ func }) => {
    return (
        <div>
            <h3>Category</h3>
            <input
                onChange={(e) => func(e.target.value)}
                className={style.category}
                autoComplete="off"
                placeholder="Category"
                name="category"
                list="category"
                type="text"
            />
            <datalist id="category">
                {list.map((cat, i) => {
                    return <option key={i} value={cat} />
                })}
            </datalist>
            <hr />
        </div>
    )
}

export default Category
