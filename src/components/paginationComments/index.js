import React, { useContext } from 'react';
import Comment from '../recipes/currentRecipe/comments/comment';
import UserContext from '../../context/userContext';

const PaginationComments = ({ comments, recipeId, changed }) => {
    const currentUserId = useContext(UserContext).user._id;

    return (
        <div>
            {comments.map(({ profilePicURL, username, timeCreated, commentData, _id, recipeCreatorId, commentatorId }, index) => {


                const canDelete = (element) => element === true;
                var showDel = [(commentatorId === currentUserId), (recipeCreatorId === currentUserId)].some(canDelete)


                return <Comment key={index}
                    profilePicURL={profilePicURL}
                    username={username}
                    timeCreated={timeCreated}
                    commentData={commentData}
                    showDel={showDel}
                    changed={changed}
                    recipeId={recipeId}
                    _id={_id}
                />
            })}
        </div>
    )
}

export default PaginationComments;