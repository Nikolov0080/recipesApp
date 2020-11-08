import React from 'react'
import style from "./input.module.css";

const InputFile = (props) => {
    return (
        <div>
            <label>
            {props.children}
               <input className={style.input_file} onChange={props.func} name={props.name} type={props.type} />
            </label>

        </div>
    )
}

export default InputFile;