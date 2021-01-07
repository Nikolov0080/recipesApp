import React from 'react';
import style from './index.module.css';

const CommentBox = ({ commentsInput, setCounter, setMinCounter }) => {

    const maxChars = 300;
    const minChars = 10;

    const handleChange = (event) => {
        const text = event.target.value;
        commentsInput(text);

        setCounter((prevVal) => {
            return maxChars - text.length
        });

        setMinCounter((prevVal) => {
            return minChars - text.length
        });
    }

    return (
        <div className="text-center">
            <textarea
                maxLength={300}
                placeholder="Comment..."
                onChange={(e) => handleChange(e)}
                className={style.comment_box} />

        </div>
    )
}

export default CommentBox;