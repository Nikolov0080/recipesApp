import React, { useContext, useState } from 'react';
import Comment from '../recipes/currentRecipe/comments/comment';
import UserContext from '../../context/userContext';
import CommentsButtons from './buttons/index';

const PaginationComments = ({ comments, recipeId, changed }) => {
    const currentUserId = useContext(UserContext).user._id;


    const perPage = 3;

    const buttonsCount = Math.ceil(comments.length / perPage);
    const [currentPage, setCurrentPage] = useState(0);
    const start = perPage * currentPage;
    const end = start + perPage;
    const currentComments = comments.slice(start, end);

    return (
        <div>
            {currentComments.map(({ profilePicURL, username, timeCreated, commentData, _id, recipeCreatorId, commentatorId }, index) => {


                const canDelete = (element) => element === true;
                var showDel = [(commentatorId === currentUserId), (recipeCreatorId === currentUserId)].some(canDelete)


                return (

                    <div key={index}>

                        <Comment
                            profilePicURL={profilePicURL}
                            username={username}
                            timeCreated={timeCreated}
                            commentData={commentData}
                            showDel={showDel}
                            changed={changed}
                            recipeId={recipeId}
                            _id={_id}
                        />

                    </div>
                )

            })}
            <CommentsButtons
                buttonsCount={buttonsCount}
                setPageComments={setCurrentPage}
            />
        </div>
    )
}

export default PaginationComments;