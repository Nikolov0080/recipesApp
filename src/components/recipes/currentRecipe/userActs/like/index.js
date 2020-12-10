import React, { useState } from 'react';
import style from './index.module.css';

const Like = ({ current, func }) => {
// TODO - HANDLE DB CALL AND RETURN
    const handleClick = () => {
        func(!current)
    }

    return (
        <div>
            <div className={style.box} onClick={handleClick}>
                {current === true ?
                    <span className={style.liked}>&#9825;</span>
                    :
                    <span className={style.not_liked}>&#9825;</span>}

            </div>
        </div>
    )
}

export default Like
