import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import DelBtn from './delBtn';
import style from './index.module.css';

const testComments = [
    {
        creator: 'daniel',
        profilePicUrl: "https://res.cloudinary.com/recepsbg/image/upload/v1605991528/profilePictures/profilePicture-1605991525712.jpg.jpg",
        commentatorId: 'someId',
        recipeCreatorId: 'anotherId',
        timeStamp: ' Jan 16, 2021 6:25 PM',
        commentData: 'so good man wanna dip my dick in it !'
    },
    {
        creator: 'daniel',
        profilePicUrl: "https://res.cloudinary.com/recepsbg/image/upload/v1605991528/profilePictures/profilePicture-1605991525712.jpg.jpg",
        commentatorId: 'someId',
        recipeCreatorId: 'anotherId',
        timeStamp: ' Jan 16, 2021 6:25 PM',
        commentData: 'so good man wanna dip my dick in it !'
    },
    {
        creator: 'daniel',
        profilePicUrl: "https://res.cloudinary.com/recepsbg/image/upload/v1605991528/profilePictures/profilePicture-1605991525712.jpg.jpg",
        commentatorId: 'someId',
        recipeCreatorId: 'anotherId',
        timeStamp: ' Jan 16, 2021 6:25 PM',
        commentData: 'so good man wanna dip my dick in it !'
    },
    {
        creator: 'daniel',
        profilePicUrl: "https://res.cloudinary.com/recepsbg/image/upload/v1605991528/profilePictures/profilePicture-1605991525712.jpg.jpg",
        commentatorId: 'someId',
        recipeCreatorId: 'anotherId',
        timeStamp: ' Jan 16, 2021 6:25 PM',
        commentData: 'so good man wanna dipdi pdip dipd ipdi pdipd wanna dipdi pdip dipd ipdi pdipd wanna dipdi pdip dipd ipdi pdipd wanna dipdi pdip dipd ipdi pdipd wanna dipdi pdip dipd ipdi pdipd wanna dipdi pdip dipd ipdi pdipd ipdi pdipdi pdipdipdipdip my dick in it !'
    }
]

const Comments = ({ recipeCreatorId, data }) => {
    console.log(data);

    const canDelete = true;
    
    return (
        <div>
            <h2 className={style.title}>Comments</h2>
            {testComments.map(({ profilePicUrl, creator, timeStamp, commentData }, index) => {
                return <div key={index} className={style.single_comment}>
                    <Container className='border rounded p-2'>

                        <Row>
                            <Col xs={1} >
                                <img className={style.comment_image} alt="user profile pic" src={profilePicUrl}></img>
                            </Col>
                            <Col>
                                <div className={style.name_time_box}>
                                    <p className={style.creator_name}> {creator}</p>
                                    <p className={style.time_stamp}>{timeStamp}</p>
                                </div>
                                <div className={style.comment_data}>

                                    <p >{commentData}</p>
                                </div>
                                <DelBtn id={"test id hahahah"} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            })}
        </div>
    )
}

export default Comments;