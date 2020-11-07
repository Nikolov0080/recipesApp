import React from 'react'
import style from "./input.module.css";

const InputField = ({ label, func, name, type }) => {
    return (
        <div>
            <label>{label}</label>
            <br />
            <input className={style.input_style}
                onChange={(e) => func(e.target.value)}
                name={name} type={type}
                min="1"
                max="10"
            />
        </div>
    )
}

export default InputField;