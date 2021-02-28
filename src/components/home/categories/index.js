import React from 'react'
import { Carousel } from 'react-bootstrap';
import getCategory from '../../../controllers/recipes/POST/getCategory/index';
import categories from './categoriesData';

const Categories = ({ func }) => {

    const handleClick = (category) => {
        getCategory(category).then((resp) => {

            if (resp.data.length > 0) {
                func({
                    category: category,
                    recipesArray: resp.data
                })
            } else {
                func({
                    category: category,
                    recipesArray: false
                })
            }

        })
    }

    return (
        <div >
            <Carousel >
                {categories.map(({ name, imageUrl }, index) => {
                    return <Carousel.Item key={index}>
                        <img
                        style={{cursor:"pointer"}}
                        className="d-block w-100"
                            onClick={() => handleClick(name.toLowerCase())}
                            src={imageUrl}
                            alt="view"
                        />
                        <Carousel.Caption>
                            <h3 >{name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
        </div>
    )
}

export default Categories;