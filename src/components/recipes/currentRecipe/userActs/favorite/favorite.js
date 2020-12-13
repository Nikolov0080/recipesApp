import React from 'react'
import style from './index.module.css';

const Favorite = ({ current, func, recipeId }) => {

    // TODO - HANDLE DB CALL AND RETURN
  
    const handleClick = () => {
        func(!current)
    }

    return (
        <div>
            <div onClick={handleClick} className={style.box}>

                {current === true ?
                    <span className={style.fav}>&#9734;</span>
                    :
                    <span className={style.not_fav}>&#9734;</span>}

            </div>
        </div>
    )
}

export default Favorite;