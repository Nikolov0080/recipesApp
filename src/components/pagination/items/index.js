import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Recipe from '../../recipes/recipe';

const Items = ({ recipes }) => {

    return (
        <div>
            <Container fluid="md">
                <Row>
                    {recipes.map((recipe, index) => {
                        return <Col key={index}><Recipe data={recipe} /></Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Items;