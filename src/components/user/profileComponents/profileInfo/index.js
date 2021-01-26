import React, { useEffect, useContext } from 'react'
import { Row, Col, ProgressBar, Container, Alert, Button } from 'react-bootstrap';
import style from './profileInfo.module.css';
import defaultImage from '../defaultImage.jpg';
import UserContext from '../../../../context/userContext';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
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

    useEffect(() => {
        if (userData) {
            if (userData.profilePictureURL === 'no image') {
                userData.profilePictureURL = defaultImage;
            }
        }
    }, [userData])

    return (
        <div className={style.cont}>

            <Row xs={2} md={2} >
                <Col md={5} className={style.pic_container}>
                    <Container>
                        <br />
                        <br />
                        <h4 className="text-center">{userData.username}</h4>
                        <img className={style.profile_pic} src={userData.profilePictureURL || 'd'} alt="userPhoto" />
                    </Container>
                </Col>
                <Col className={style.info_container}>
                    <Container>
                        <br />
                        <ProgressBar animated="true" label="Skill level" variant="danger" now={(userData.skillLevel + 0) * 2} />
                        <br />

                        <LinkContainer to={`/created-recipes/${userData._id}`}>
                            <Alert variant="danger">Recipes [{userData.userRecipes.length}]</Alert>
                        </LinkContainer>

                        <LinkContainer to={`liked-recipes/${userData._id}`}>
                            <Alert variant="danger">Liked [{userData.likedRecipes.length / 2}]</Alert>
                        </LinkContainer>

                        <Button size="lg" onClick={handleClick}>Sign out</Button>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileInfo;