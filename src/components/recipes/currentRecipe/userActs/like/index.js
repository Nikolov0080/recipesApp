import React, { useState } from 'react';
import style from './index.module.css';

const Like = ({ current, func }) => {

    const [liked, setLiked] = useState('liked');

    useState(() => {
        current !== true ? setLiked('not_liked') : setLiked('liked')
    }, [current,setLiked,liked])

    return (
        <div>
            <div className={style.box} onClick={() => func(!current)}>

                <span className={style[liked]}>&#9825;</span>
            </div>
        </div>
    )
}

export default Like
