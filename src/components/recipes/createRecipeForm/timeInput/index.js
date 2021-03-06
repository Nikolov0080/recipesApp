import React from 'react'
import style from './index.module.css';

const TimeInput = ({ func, label, name, id }) => {
    return (
        <div>
            <div className="float-none form-inline mr-5 ml-5 pl-4">
                <h4 className="mr-3">{label}</h4>
                <input
                    placeholder="Minutes"
                    onChange={(e => func(e.target.value))}
                    className={style.input_time}
                    id={id} type="number" name={name}
                />
            </div>
            <hr />
        </div>
    )
}

export default TimeInput;