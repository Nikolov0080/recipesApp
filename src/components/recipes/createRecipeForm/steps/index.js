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

    const handleChangeInput = (index, event) => {
        const values = [...currentSteps];
        values[index]['stepData'] = event.target.value;
        setCurrentSteps(values);
        func(values);
    }

    const removeStep = (index, event) => {
        const values = [...currentSteps];
        values.splice(index, 1);
        setCurrentSteps(values);
        func(values);
    }

    return (
        <div>
            <h3>STEPS</h3>
            {currentSteps.map(({ stepData }, index) => {
                return (
                    <div key={index} className={style.step_box}>
                        <StepTextBox
                            func={handleChangeInput}
                            delFunc={removeStep}
                            val={stepData}
                            index={index} />   {/*TODO     ADD FUNC AND INDEX  */}
                    </div>
                )
            })}

            <Button variant="outline" size="lg" onClick={addOne}>+ New step</Button>
            <hr />
        </div>
    )
}

export default Steps;