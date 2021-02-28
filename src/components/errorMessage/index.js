import React from 'react'
import style from './index.module.css';
import { Alert } from 'react-bootstrap';


const ErrorMessage = ({ text, variant }) => {


    if (!text) {
        return (
            <div>
                <Alert className={style.ok} variant="success">
                    <h3>All good    
                  <span> &#10003;</span>
                    </h3>
                </Alert>
            </div>
        )
    }


    if (variant === 'auth')
        return (
            <div>
                <Alert className={style.err} variant="danger">
                    {text}
                </Alert>
            </div>
        )

    if (variant === 'info')
        return (
            <div>
                <Alert className={style.info} variant="info">
                    {text}
                </Alert>
            </div>
        )
}

export default ErrorMessage;