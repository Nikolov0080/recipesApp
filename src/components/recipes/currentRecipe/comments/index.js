import React from 'react'
import style from './index.module.css';
import PaginationComments from '../../../paginationComments';

const Comments = ({ creatorId, data, recipeId, changed }) => {

    return (
        <div>
            <h2 className={style.title}>Comments</h2>

            <PaginationComments comments={data}
                recipeId={recipeId}
                changed={changed}
            />
        </div>
    )
}

export default Comments;