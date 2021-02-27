import React, { useEffect, useState } from 'react'
import style from './loading.module.css';
import Skeleton from '@yisheng90/react-loading';

const Loading = () => {

    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        setTimeout(() => {
            setMessage("Waking up the database");
        }, 1000);

        setTimeout(() => {
            setMessage("Need some time, cuz its free");
        }, 3000)
    })

    return (
        <div className={style.loading_container}>
            <Skeleton width="100%" height="1000px" >
                <h1 className={style.pulsate}>{message}</h1>
            </Skeleton>
        </div>
    )


}

export default Loading;