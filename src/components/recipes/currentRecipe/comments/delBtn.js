import React from 'react';
import { Button } from 'react-bootstrap';

const DelBtn = ({id}) => {

    const handleClick = (id)=>{
        console.log(id);
    }

    return (
        <div>
            <Button onClick={()=>handleClick(id)} variant="danger">Delete</Button>
        </div>
    )
}

export default DelBtn
