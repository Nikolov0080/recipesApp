import React, { useState } from 'react'
import style from './index.module.css';

const Difficulty = ({ func }) => {
    const [level, setLevel] = useState(1)
    const handleChange = (event) => {
        const value = Math.round(event.target.value / 10);
        value <= 1 ? setLevel(1) : setLevel(value);
        func(level)
    }
    
    return (
        <div>
            <h3>Select difficulty</h3>
            <input
            className={style.range_input}
            onChange={(e) => handleChange(e)} type="range" />
            <h3>{level}</h3>
        </div>
    )
}

export default Difficulty;