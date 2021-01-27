import React, { useContext } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import DelBtn from './delBtn';
import style from './index.module.css';
import UserContext from '../../../../context/userContext';

const Comments = ({ creatorId, data, recipeId, changed }) => {

    const currentUserId = useContext(UserContext).user._id;

    return (
        <div>
            <h2 className={style.title}>Comments</h2>
            {data.map(({ profilePicURL, username, timeCreated, commentData, _id, recipeCreatorId, commentatorId }, index) => {

                const canDelete = (element) => element === true;

                var showDel = [(commentatorId === currentUserId), (recipeCreatorId === currentUserId)].some(canDelete)

                return <div key={index} className={style.single_comment}>
                    <Container className='border rounded p-2'>
                        <Row>
                            <Col xs={1} >
                                <img className={style.comment_image} alt="user profile pic" src={profilePicURL}></img>
                            </Col>
                            <Col>
                                <div className={style.name_time_box}>
                                    <p className={style.creator_name}> {username}</p>
                                    <p className={style.time_stamp}>{timeCreated}</p>
                                </div>
                                <div className={style.comment_data}>

                                    <p >{commentData}</p>
                                </div>
                                {showDel === true
                                    ?
                                    <DelBtn recipeId={recipeId} commentId={_id} changed={changed} />
                                    : ""
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            })}
        </div>
    )
}

export default Comments;