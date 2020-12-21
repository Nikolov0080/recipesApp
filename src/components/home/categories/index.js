import React from 'react'
import style from './index.module.css';
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
                    recipesArray: "No recipes in this category"
                })
            }

        })
    }

    return (
        <div>
            <Carousel className={style.main_box}>
                {categories.map(({ name, imageUrl }, index) => {
                    return <Carousel.Item className={style.current} key={index}>

                        <img
                            onClick={() => handleClick(name.toLowerCase())}
                            className={style.cat_img}
                            src={imageUrl}
                            alt="view"
                        />

                        <Carousel.Caption>
                            <h3 className={style.cat_name}>{name}</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                })}


            </Carousel>
        </div>
    )
}

export default Categories
