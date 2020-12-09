import React from 'react'
import style from './index.module.css';
import Like from './like/index';
import Favorite from './favorite/favorite';

const UserActs = () => {
    return (
        <div>
            <div className={style.act_box}>
                
                    <Like />
                    <Favorite />
              
            </div>

        </div>
    )
}

export default UserActs;