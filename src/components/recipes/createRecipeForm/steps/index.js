import React, { useState } from 'react'
import StepTextBox from './textBox/index';
import style from './steps.module.css';
import { Button } from 'react-bootstrap';

const Directions = ({ func }) => {

    const step = { stepData: '' }

    const [currentDirections, setCurrentDirections] = useState([{
        stepData: ''
    }]);

    const addOne = () => {
        setCurrentDirections([...currentDirections, step]);
        func(currentDirections)
    }

    const handleChangeInput = (index, event) => {
        const values = [...currentDirections];
        values[index]['stepData'] = event.target.value;
        setCurrentDirections(values);
        func(values);
    }

    const removeStep = (index, event) => {
        const values = [...currentDirections];
        values.splice(index, 1);
        setCurrentDirections(values);
        func(values);
    }

    return (
        <div>
            <h3>DIRECTIONS</h3>
            {currentDirections.map(({ stepData }, index) => {
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

export default Directions;