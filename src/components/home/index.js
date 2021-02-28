import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Categories from './categories/index';
import CurrentCategory from './currentCategory/index';
import Facts from './facts';
import style from './index.module.css';
import Landing from './landing';

const Home = () => {

    const [currentCategory, setCurrentCategory] = useState(undefined);

    return (
        <div>
            <div className={style.big_box}>

                <Row md={true} className={style.container}>
                    <Col className={style.left_col} >
                        <p className={style.info}>

                        Click on the image to view the recipes in the category
                        </p>
                </Col>
                    <Col className="pl-5" md={true} lg={5}>
                        {/* Center categories */}
                        <Categories func={setCurrentCategory} />
                    </Col>
                    <Col className={style.right_col} >
                        <Facts />
                    </Col>
                </Row>
            </div>
            {currentCategory !== undefined
                ?
                <CurrentCategory show={setCurrentCategory} categorySelected={currentCategory} />
                :
                <Landing />
            }
        </div>
    )
}

export default Home;