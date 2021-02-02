import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';


const PagesButtons = ({ buttonsCount }) => {

    const count = [];

    for (let i = 0; i < buttonsCount; i++) {
        count.push(i + 1)
    }

    return (
        <div>
            <ButtonGroup>
                {count.map((val) => {
                    return (
                        <Button>{val}</Button>
                    )
                })}

            </ButtonGroup>
        </div>
    )
}

export default PagesButtons;