import React from 'react'

const CurrentCategory = ({ categorySelected }) => {

    const { category, recipesArray } = categorySelected;
// todo set more variables for recipes // no recipes
    if (!recipesArray) {
        return (
            <div>
                <h1>{categorySelected.category}</h1>
                <h1>No recipes...</h1>
            </div>
        )
    }

    return (
        <div>
            Current Category
            <h1>{categorySelected.category}</h1>

            <h1>{categorySelected.recipesArray.length}</h1>

        </div>
    )
}

export default CurrentCategory
