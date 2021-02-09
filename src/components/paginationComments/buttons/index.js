import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';

const CommentsButtons = ({ buttonsCount, setPageComments }) => {

    const count = [];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index); // setting active page button & "number"
        /*
        todo --- set function to display 
        the recipes per the current page
          */
        setPageComments(index);
    }

    for (let i = 0; i < buttonsCount; i++) {
        count.push(i + 1);
    }

    return (
        <div>
          <div className="text-center">
            <ButtonGroup>
                {count.map((val, index) => {

                    if (index === activeIndex) {
                        return (
                            <Button variant="primary" onClick={() => handleClick(index)} key={index}>{val}</Button>
                        )
                    }

                    return (
                        <Button variant="outline-primary" onClick={() => handleClick(index)} key={index}>{val}</Button>
                    )
                })}
            </ButtonGroup>
        </div>
        </div>
    )
}

export default CommentsButtons;