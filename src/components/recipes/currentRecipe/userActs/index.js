import React from 'react'
import style from './index.module.css';
import Like from './like/index';

const UserActs = () => {
    return (
        <div>
            <div className={style.act_box}>
                <Like />
            </div>
        </div>
    )
}

export default UserActs;