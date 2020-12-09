import React, { useState } from 'react';
import style from './index.module.css';

const Like = ({ isLiked }) => {

    const [liked, setLiked] = useState('liked');
    useState(() => {
        isLiked !== true ? setLiked('not_liked') : setLiked('liked')
    }, [])

    return (
        <div>
            <span className={style[liked]}>&#9825;</span>
        </div>
    )
}

export default Like
