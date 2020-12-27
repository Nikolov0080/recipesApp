import React from 'react'
import { ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

const RecipeData = ({ name, description, prepTime, cookTime,difficulty }) => {
    // TODO === STYLES
    return (
        <div>
            <ListGroup>
                <ListGroupItem>{description}</ListGroupItem>
                <ListGroupItem className="text-center">Prep time
                            <h3>{prepTime} min</h3> </ListGroupItem>
                <ListGroupItem className="text-center">Cook time
                           <h3>{cookTime} min</h3> </ListGroupItem>
            </ListGroup>
            <div className="container-sm text-center">
                <h4 >Difficulty</h4>
                <ProgressBar label={difficulty + '/10'} variant="SUCCESS" animated="true" now={difficulty*10} />
            </div>
        </div>
    )
}

export default RecipeData;