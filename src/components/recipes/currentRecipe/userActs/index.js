import React, { useState } from 'react'
import style from './index.module.css';
import Like from './like/index';
import Favorite from './favorite/favorite';

const UserActs = () => {

const [liked,setLiked] = useState(false);
const [fav,setFav] = useState(false); 
console.log(liked)
    return (
        <div>
            <div className={style.act_box}>

                <Like func={setLiked} current={liked}/>
                <Favorite func={setFav} current={fav}/>

            </div>

        </div>
    )
}

export default UserActs;