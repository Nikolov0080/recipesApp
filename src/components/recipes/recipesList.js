import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Recipe from './recipe'

const UserRecipes = ({ func, recipes }) => {

    return (
        <div>
            <hr />
            <h1 className="text-center">My recipes</h1>
            <hr />

            <Container>
                <Row>
                    {recipes.map((recipe, index) => {
                        return <Col key={index}><Recipe func={func} data={recipe} /></Col>
                    })}
                </Row>

            </Container>

        </div>
    )
}

export default UserRecipes
