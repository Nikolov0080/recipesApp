import React from 'react'
import style from './index.module.css';
import { Button } from 'react-bootstrap';

const StepTextBox = ({ func, delFunc, index, val }) => {
    return (
        <div className={style.step_box}>
            <div className="row justify-content-center">
                <h4 className={style.step_index}>Step {index + 1}</h4>
                <textarea
                    placeholder="Type here"
                    name="step"
                    onChange={(e) => func(index, e)}
                    className={style.text_step}
                    value={val} />
                <Button onClick={(e) => delFunc(index, e)} variant="outline-primary" className={style.remove_btn}>Remove</Button>
            </div>
        </div>
    )
}

export default StepTextBox;