import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import getAllRecipes from '../../../controllers/recipes/GET/getAllRecipes/index';
import Loading from '../../loading/index';
import UserRecipes from '../../recipes/recipesList';
import sortingAlgorithms from './sortingAlgorithms';
import style from './index.module.css';

const {
    byLikes,
    byDifficulty,
    mostEasy
} = sortingAlgorithms;

const Landing = () => {

    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    const [label, setLabel] = useState('All recipes')
    const [filtered, setFiltered] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [empty, setEmpty] = useState(false);

    const getRecipes = () => {
        getAllRecipes().then(({ data }) => {
            if (!Array.isArray(data)) {
                setEmpty(true);
                console.log(data)
            }
            setRecipes(data);
            setLoading(false);
        }).catch(e => {
            setRecipes(false);
        })
    }

    useEffect(() => {
        getRecipes();
    }, []);

    const handleClick = (buttonIndex) => {
        setLoading2(true);
        /*eslint-disable */
        switch (buttonIndex) {
            case 0:
                setFiltered(byLikes(recipes));
                setLabel('Most Liked')
                break;
            case 1:
                setFiltered(byDifficulty(recipes));
                setLabel('Most Difficult')

                break;
            case 2:
                setFiltered(mostEasy(recipes));
                setLabel('Easiest recipes')
                break;
        }
        /*eslint-enable */
        setTimeout(() => {
            setLoading2(false);
        }, 1000)
    }

    if (!recipes) {
        return (
            <h1 className="text-center">No connection to the server try again later</h1>
        )
    }

    if (empty) {
        return (
            <div>
                <hr />
                <h1 className="text-center">No recipes</h1>
            </div>
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
            <hr />

            <h1 className={style.label}>{label}</h1>
            <hr />
            {
                loading2 === true
                    ?
                    <Loading />
                    :
                    filtered.length !== 0
                        ?
                        <UserRecipes recipes={filtered.slice(0, 6)} />
                        :
                        <UserRecipes recipes={recipes.slice(0, 6)} />
            }
        </div >
    )
}

export default Landing;