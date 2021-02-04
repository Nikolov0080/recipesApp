import React, { useState } from 'react'
import PagesButtons from './pagesButtons/index';
import Items from './items/index';

const Pagination = ({ allRecipes }) => {

    const perPage = 3;

    const buttonsCount = Math.ceil(allRecipes.length / perPage);
    const [currentPage, setCurrentPage] = useState(0);
    const start = perPage * currentPage;
    const end = start + perPage;
    const currentRecipes = allRecipes.slice(start,end)

    return (
        <div>
            <Items
                recipes={currentRecipes}
            />
            {buttonsCount !== 1
                ?
                <PagesButtons
                    buttonsCount={buttonsCount}
                    setPageRecipes={setCurrentPage}
                />
                :
                ''
            }
        </div>
    )
}

export default Pagination;