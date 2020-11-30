import React, { useState } from 'react'
import StepTextBox from './textBox/index';
import style from './steps.module.css';
import { Button } from 'react-bootstrap';

const Steps = ({ func }) => {

    const step = { stepData: '' }

    const [currentSteps, setCurrentSteps] = useState([{
        stepData: ''
    }]);

    const addOne = () => {
        setCurrentSteps([...currentSteps, step]);
        func(currentSteps)
    }

    return (
        <div>
            <h3>STEPS</h3>
            {currentSteps.map(({ stepData }, index) => {
                return (
                    <div key={index} className={style.step_box}>
                        <StepTextBox val={stepData} />   {/*TODO     ADD FUNC AND INDEX  */}
                    </div>
                )
            })}

            <Button variant="outline" size="lg" onClick={addOne}>+ New step</Button>

        </div>
    )
}

export default Steps;