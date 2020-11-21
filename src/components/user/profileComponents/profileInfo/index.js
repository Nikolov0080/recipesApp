import React, { useEffect, useState } from 'react'
import { Row, Col, ProgressBar, Container, Alert } from 'react-bootstrap';
import Loading from '../../../loading/index';
import style from './profileInfo.module.css';

const ProfileInfo = ({ userData }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userData) { setLoading(false) }
    }, [loading, userData])

    if (loading) {
        console.log(userData)
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div className={style.cont}>

            <Row xs={1} md={2}>
                <Col md={4} className={style.pic_container}>
                    <Container>
                        <br />
                        <br />
                        <img className={style.profile_pic} src={userData.profilePictureURL || 'd'} alt="userPhoto" />
                    </Container>
                </Col>
                <Col className={style.info_container}>
                    <Container>
                        <br />
                        <ProgressBar animated="true" label="Skill level" variant="danger" now={(userData.skillLevel + 0) * 2} />
                        <br />

                        <Alert variant="danger">Recipes [{userData.userRecipes.length}]</Alert>
                        <Alert variant="danger">Favorites [{userData.favorites.length}]</Alert>
                        <Alert variant="danger">Liked [{userData.likedRecipes.length}]</Alert>

                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileInfo