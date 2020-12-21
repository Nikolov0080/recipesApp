import React from 'react'

const CurrentCategory = ({categorySelected}) => {

// const {category,recipesArray} = categorySelected;

if(categorySelected === undefined){
    return (
        <div>

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
