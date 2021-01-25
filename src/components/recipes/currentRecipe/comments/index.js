import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import DelBtn from './delBtn';
import style from './index.module.css';

const Comments = ({ recipeCreatorId, data,recipeId,changed }) => {

    const canDelete = true;
    // const [modified, setModified] = useState(false);

    return (
        <div>
            <h2 className={style.title}>Comments</h2>
            {data.map(({ profilePicURL, username, timeCreated, commentData,_id }, index) => {
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
                                <DelBtn recipeId={recipeId} commentId={_id} changed={changed}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            })}
        </div>
    )
}

export default Comments;