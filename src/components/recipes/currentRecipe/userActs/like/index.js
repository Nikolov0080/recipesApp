import React, { useState } from 'react';
import style from './index.module.css';

const Like = ({ isLiked }) => {

    const [liked, setLiked] = useState('liked');
    useState(() => {
        isLiked !== true ? setLiked('not_liked') : setLiked('liked')
    }, [])

    return (
        <div>
            <div className={style.box}>

            <span className={style[liked]}>&#9825;</span>
            </div>
        </div>
    )
}

export default Like
