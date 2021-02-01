import React from 'react'
import style from './index.module.css';

const Description = ({func}) => {
    return (
        <div>
            <h3>Description</h3>
            <textarea
            maxLength={1024}
            onChange={(e)=>func(e.target.value)} 
            className={style.description_input} /> 
            <hr />
        </div>
    )
}

export default Description
