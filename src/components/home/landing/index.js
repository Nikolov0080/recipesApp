import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import getAllRecipes from '../../../controllers/recipes/GET/getAllRecipes/index';
import Loading from '../../loading/index';
import UserRecipes from '../../recipes/recipesList';
import sortingAlgorithms from './sortingAlgorithms';

const {
    byLikes,
    byDifficulty,
    mostEasy
} = sortingAlgorithms;

const Landing = () => {

    const [filtered, setFiltered] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);

    const getRecipes = () => {
        getAllRecipes().then(({ data }) => {
            if (!Array.isArray(data)) {
                setEmpty(true);
            }
            setRecipes(data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getRecipes();

    }, []);

    const handleClick = (buttonIndex) => {
        switch (buttonIndex) {
            case 0:

                setFiltered(byLikes(recipes))
                break;
            case 1:

                setFiltered(byDifficulty(recipes))
                break;
            case 2:

                setFiltered(mostEasy(recipes))
                break;
        }
    }


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
                    <Button onClick={() => handleClick(0)} className="mr-2 ml-2" variant="outline-primary">Most Liked</Button>
                    <Button onClick={() => handleClick(1)} className="mr-2 ml-2" variant="outline-primary">Most Difficult</Button>
                    <Button onClick={() => handleClick(2)} className="mr-2 ml-2" variant="outline-primary">Easiest recipes</Button>
                </ButtonGroup>
            </Container>

            {filtered.length !== 0
                ?
                <UserRecipes recipes={filtered.slice(0, 6)} />
                :
                <UserRecipes recipes={recipes.slice(0, 6)} />
            }
        </div>
    )
}

export default Landing;