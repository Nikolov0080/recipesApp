import React, { useState, useContext } from 'react'
import style from './index.module.css';
import Like from './like/index';
import Favorite from './favorite/favorite';
import UserContext from '../../../../context/userContext';

const UserActs = ({ recipeId }) => {

    const context = useContext(UserContext);
    const userId = context.user._id
    const [liked, setLiked] = useState(false);
    const [fav, setFav] = useState(false);



    return (
        <div>
            <div className={style.act_box}>

                <Like func={setLiked} current={liked} recipeId={recipeId} userId={userId} />
                <Favorite func={setFav} current={fav} recipeId={recipeId} userId={userId} />

            </div>

        </div>
    )
}

export default UserActs;