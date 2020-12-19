import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Categories from './categories/index';
import Facts from './facts';
import style from './index.module.css';

const Home = () => {
    return (
        <div>
            <div className={style.big_box}>
                <Row className={style.container}>
                    <Col className={style.left_col} >
                        TEXT
                </Col>
                    <Col sm={true}>
                        {/* Center categories */}
                        <Categories />
                    </Col>
                    <Col className={style.right_col} >

                        <Facts />
                    </Col>
                </Row>

            </div>

        </div>
    )
}

export default Home;