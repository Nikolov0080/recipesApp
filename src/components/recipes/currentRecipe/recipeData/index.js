import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const RecipeData = ({ name, description, prepTime, cookTime }) => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem className="text-center" as="h2">{name}</ListGroupItem>
                <ListGroupItem>{description}</ListGroupItem>
                <ListGroupItem className="text-center">Prep time
                            <h3>{prepTime} min</h3> </ListGroupItem>
                <ListGroupItem className="text-center">Cook time
                           <h3>{cookTime} min</h3> </ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default RecipeData;