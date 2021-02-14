import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Recipe from '../../recipes/recipe';

const Items = ({ recipes }) => {

    return (
        <div>
            <Container  >
                <Row className="justify-content-md-center">
                    {recipes.map((recipe, index) => {
                        return <Col  sm={true} key={index}><Recipe data={recipe} /></Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Items;