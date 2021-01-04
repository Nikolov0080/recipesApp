import React, { useState, useEffect } from 'react'
import searchRecipe from '../../../../controllers/recipes/POST/searchRecipe/index';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../../../components/loading/index';
import Recipe from '../../../../components/recipes/recipe';
const ResultList = () => {

    const query = window.location.search.replace('?', '')
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {

        searchRecipe(query).then(resp => {
            setRecipes(resp.data)
        });
    }, [query])

    if (recipes === null) {
        return (
            <Loading />
        )
    } else if (recipes.length === 0) {
        return (
            <div>
                <h1>nothing found</h1>
            </div>
        )
    }

    return (
        <div>
            <Container>
                <Row>
                    {recipes.map((recipe, index) => {
                        return <Col key={index}><Recipe data={recipe} /></Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default ResultList;