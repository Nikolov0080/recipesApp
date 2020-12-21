import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Categories from './categories/index';
import CurrentCategory from './currentCategory/index';
import Facts from './facts';
import style from './index.module.css';

const Home = () => {

    const [currentCategory, setCurrentCategory] = useState(undefined);

    return (
        <div>
            <div className={style.big_box}>
                <Row className={style.container}>
                    <Col className={style.left_col} >
                        TEXT
                </Col>
                    <Col sm={true}>
                        {/* Center categories */}
                        <Categories func={setCurrentCategory} />
                    </Col>
                    <Col className={style.right_col} >
                        <Facts />
                    </Col>
                </Row>
            </div>

            <CurrentCategory categorySelected={currentCategory} />

        </div>
    )
}

export default Home;