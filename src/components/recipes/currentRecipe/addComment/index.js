import React, { useState } from 'react';
import CommentBox from './commentBox/index';
import { Button } from 'react-bootstrap';
import style from './index.module.css';
import commentRecipe from '../../../../controllers/recipes/POST/commentRecipe/index';
import LoadingBtn from '../../../common/loadingBtn';

const AddComments = ({ recipeCreatorId, commentatorId, username, profilePicURL, recipeId, changed }) => {

    const [input, setInput] = useState('');
    const [counter, setCounter] = useState(300);
    const [minCounter, setMinCounter] = useState(10);
    const [loadingBtn, setLoadingBtn] = useState(false);

    const completeComment = {
        recipeId,
        recipeCreatorId,
        commentatorId,
        username,
        profilePicURL,
        commentData: input,
    }

    const buttons = () => {
        if (loadingBtn) {
            return (
                <LoadingBtn />
            )
        }
        if (minCounter <= 0) {
            return (<Button onClick={handleSubmit}>Submit</Button>);
        }
        else {
            return (<Button variant="outline-disabled">{minCounter} more

            </Button>);
        }
    }

    const handleSubmit = () => {
        setLoadingBtn(true)
        changed(true);
        commentRecipe(completeComment).then(() => {
            changed(true);
            setLoadingBtn(false)
        })
    }

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
                {buttons()}
            </div>
        </div>
    )
}

export default AddComments;