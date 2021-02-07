import React, { useState, useEffect } from 'react'
import searchRecipe from '../../../../controllers/recipes/POST/searchRecipe/index';
import { Container} from 'react-bootstrap';
import Loading from '../../../../components/loading/index';
import Pagination from '../../../../components/pagination';
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
                <Pagination display="recipes" allRecipes={recipes}/>
            </Container>
        </div>
    )
}

export default ResultList;