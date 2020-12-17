import React, { useEffect, useState, useContext } from 'react'
import { Row, Col, ProgressBar, Container, Alert, Button } from 'react-bootstrap';
import Loading from '../../../loading/index';
import style from './profileInfo.module.css';
import defaultImage from '../defaultImage.jpg';
import UserContext from '../../../../context/userContext';
import { useHistory } from 'react-router-dom';

const ProfileInfo = ({ userData }) => {
    const signOut = useContext(UserContext).signOut
    const history = useHistory();

    const handleClick = () => {
        signOut().then(resp => {
            if (resp === true) {
                history.push('/');
            }
        })
    }


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userData) {

            setLoading(false);

            if (userData.profilePictureURL === 'no image') {
                userData.profilePictureURL = defaultImage;
            }
        }
    }, [loading, userData])

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div className={style.cont}>

            <Row xs={2} md={2} >
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
                        <Alert variant="danger">Liked [{userData.likedRecipes.length / 2}]</Alert>
                        <Button size="lg" onClick={handleClick}>Sign out</Button>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileInfo;