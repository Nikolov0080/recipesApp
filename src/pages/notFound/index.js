import React, { Component } from 'react'
import notFound from './notFound.PNG';
import style from './index.module.css';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className={style.err_msg}>Page Not Found</h1>
               <img className={style.err_img} src={notFound} alt="error 404"/>
            </div>
        )
    }
}
