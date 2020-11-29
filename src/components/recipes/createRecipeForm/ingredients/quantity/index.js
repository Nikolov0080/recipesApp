import React from 'react'
import style from './index.module.css';

const Quantity = ({ func, index, val }) => {

    return (
        <div className={style.box}>
            <input onChange={(e) => func(index, e)}
                value={val}
                placeholder="quantity"
                className={style.quantity}
                name="quantity"
                type="number" />
        </div>
    )
}

export default Quantity;