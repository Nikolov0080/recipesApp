import React from 'react'
import style from './loading.module.css';
import Skeleton from '@yisheng90/react-loading';

const Loading = () => {

    return (
        <div className={style.loading_container}>
            
            <Skeleton width="100%" height="1000px" >
              <h1 className={style.pulsate}>Loading...</h1>  
                </Skeleton>
           
        </div>
    )
}

export default Loading;