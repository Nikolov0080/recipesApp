import React from 'react'
import style from "./input.module.css";

const InputFile = (props) => {
    return (
        <div>
            <label>
                <input className={style.input_file}
                accept="image/*"
                    onChange={props.func}
                    name={props.name}
                    type="file" />
                {props.children}
            </label>
        </div>
    )
}

export default InputFile;