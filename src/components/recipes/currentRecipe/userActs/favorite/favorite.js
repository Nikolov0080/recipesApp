import React, { useState } from 'react'
import style from './index.module.css';

const Favorite = ({ current, func }) => {

    const [fav, setFav] = useState('fav');
    useState(() => {
        current !== true ? setFav('not_fav') : setFav('fav')
    }, [])

    return (
        <div>
            <div className={style.box}>
                <span className={style[fav]}> &#9734;</span>
            </div>
        </div>
    )
}

export default Favorite;