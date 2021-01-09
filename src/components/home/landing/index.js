import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import getAllRecipes from '../../../controllers/recipes/GET/getAllRecipes/index';
import Loading from '../../loading/index';
import sortingAlgorithms from './sortingAlgorithms';

const {
    byLikes,
    byDifficulty,
    mostEasy
} = sortingAlgorithms;

const Landing = () => {

    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);



    useEffect(() => {
        getAllRecipes().then(({ data }) => {
            if (!Array.isArray(data)) {
                setEmpty(true);
            }

            setFiltered(data.slice(0, 6))
            setLoading(false);
        })
    }, [])

    console.log(filtered)
    if (empty) {
        return (
            <h1 className="text-center">No recipes</h1>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <Container className='mt-5'>

                <ButtonGroup className="d-flex justify-content-center">
                    <Button className="mr-2 ml-2" variant="outline-primary">Most Liked</Button>
                    <Button className="mr-2 ml-2" variant="outline-primary">Most Difficult</Button>
                    <Button className="mr-2 ml-2" variant="outline-primary">Easiest recipes</Button>
                </ButtonGroup>
            </Container>

        </div>
    )
}

export default Landing;