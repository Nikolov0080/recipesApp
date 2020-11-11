import React from 'react'
import style from './formBox.module.css';

const FormBox = (props) => {
    return (
        <div className={style.box}>
            <div className="shadow p-3 mb-5 bg-white rounded mt-5 rounded">
                {props.children}
            </div>
        </div>
    )
}

export default FormBox;