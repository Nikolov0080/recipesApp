import React from 'react'
import style from './index.module.css';
import DelBtn from './delBtn';
import { Col, Row, Container } from 'react-bootstrap';

const Comment = ({_id,profilePicURL,username,timeCreated,commentData,showDel,changed,recipeId}) => {
    return (
        <div>
            <div  className={style.single_comment}>
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
        </div>
    )
}

export default Comment
