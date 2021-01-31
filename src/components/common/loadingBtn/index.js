import React from 'react'
import {Button,Spinner} from 'react-bootstrap';

const LoadingBtn = () => {
    return (
        <div>
            <Button variant="primary">
                <Spinner animation="grow" variant="light" />
            </Button>
        </div>
    )
}

export default LoadingBtn;