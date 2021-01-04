import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import style from './index.module.css';

const Difficulty = ({ func }) => {

    const [variants, setVariants] = useState(
        ["outline-secondary", "outline-secondary",
            "outline-secondary", "outline-secondary",
            "outline-secondary", "outline-secondary",
            "outline-secondary", "outline-secondary",
            "outline-secondary", "outline-secondary"]
    );

    const handleClick = (buttonIndex) => {
        // long algorithm for something simple , I just like algorithms :)
        const newVariants = variants.reduce((acc, cVal, index) => {

            if (buttonIndex === index) {
                acc.push('primary')
            } else {
                acc.push('outline-secondary')
            }

            return acc;
        }, []);

        setVariants([...newVariants]);
        func(buttonIndex + 1)
    }

    return (
        <div>
            <h3>Select difficulty</h3>

            <ButtonGroup as="div"  className={style.buttons}>
                {variants.map((curr, index) => {
                    return <Button size="sm"  onClick={() => handleClick(index)} variant={curr}>{index + 1}</Button>
                })}
            </ButtonGroup>

            <hr />
        </div>
    )
}

export default Difficulty;