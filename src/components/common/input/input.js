import React from 'react'
import style from "./input.module.css";

const InputField = ({ label, func, name, type }) => {

    if (name === 'skillLevel') {
        return (
            <div>
                <label>{label}</label>
                <br />
                <select name={name} onChange={(e) => func(e.target.value)} >
                    <option value="1">1 - New to cooking</option>
                    <option value="2">2 - Have small experience</option>
                    <option value="3">3 - Intermediate</option>
                    <option value="4">4 - advanced</option>
                    <option value="5">5 - Expert</option>
                </select>
            </div>
        )
    }

    return (
        <div>
            <br />
            <input className={style.input_text}
                onChange={(e) => func(e.target.value)}
                name={name} type={type}
                placeholder={label}
            />
        </div>
    )
}

export default InputField;