import React, { useState, useEffect } from 'react';
import likedRecipes from '../../../controllers/user/GET/likedRecipes';
import Pagination from '../../../components/pagination/index';
import Loading from '../../../components/loading/index';
import style from './index.module.css';

const LikedRecipes = (props) => {

    const userId = props.location.pathname.replace("/liked-recipes/", '');

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const reducer = (acc, cVal) => {
            // todo fix the bug with all the recipes here
            if (acc.length > 0) {
                acc.map((current) => {
                    if (!JSON.stringify(acc).includes(cVal._id)) {
                        acc.push(cVal);
                    }
                    return acc
                })
            } else {
                acc.push(cVal)
            }

            return acc;
        }

        likedRecipes(userId).then((resp) => {
            const filtered = resp.data.reduce(reducer, []);
            setRecipes(filtered);
            setLoading(false)
        })
    }, [userId]);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <h1 className={style.title}>Liked Recipes</h1>
            <Pagination display="recipes" allRecipes={recipes} />
        </div>
    )
}

export default LikedRecipes;