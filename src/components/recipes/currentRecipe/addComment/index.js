import React, { useState } from 'react';
import CommentBox from './commentBox/index';
import { Button } from 'react-bootstrap';
import style from './index.module.css';

const AddComments = () => {

    const [input, setInput] = useState('');
    const [counter, setCounter] = useState(300);
    const [minCounter, setMinCounter] = useState(10);

    return (
        <div>
            <CommentBox
                commentsInput={setInput}
                setCounter={setCounter}
                setMinCounter={setMinCounter} />
            {/* Buttons and counters box below */}
            {/* Characters counter */}
            <div className={style.char_counter}>
                {minCounter > 0 ?
                    <p className={style.min_char}>Type {minCounter} more characters</p>
                    :
                    <p className={style.max_char}>Max {counter} characters more</p>
                }
            </div>
            {/* Buttons show-hide  */}
            <div className={style.btn_container}>
                <Button type="submit">Submit</Button>
            </div>
        </div>
    )
}

export default AddComments;