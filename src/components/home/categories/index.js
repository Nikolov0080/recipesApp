import React from 'react'
import style from './index.module.css';
import { Carousel, Container } from 'react-bootstrap';

import categories from './categoriesData';


const Categories = () => {
    return (
        <div>
                 <Carousel className={style.main_box}>
                {categories.map(({ name, imageUrl }, index) => {
                    return <Carousel.Item className={style.current} key={index}>

                        <img
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
