import React from 'react'
import style from './index.module.css';

const DeleteButton = ({ func,index }) => {
    return (
        <div className={style.del_box}>
            <input onClick={(e)=>func(index,e)} className={style.del_btn} value="Remove" type="button" />
        </div>
    )
}

export default DeleteButton
