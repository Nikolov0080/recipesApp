import React from 'react'
import { Component } from 'react'
import ResultList from './resultList'
import searchRecipe from '../../../controllers/recipes/POST/searchRecipe/index';

class SearchResults extends Component {

    
    
    render() {

        return (
            <div>
                <ResultList />
            </div>
        )
    }
}

export default SearchResults;