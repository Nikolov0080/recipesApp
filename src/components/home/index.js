import React, { useState } from 'react'
import { Col, Row,Button } from 'react-bootstrap';
import Categories from './categories/index';
import CurrentCategory from './currentCategory/index';
import Facts from './facts';
import style from './index.module.css';
import Landing from './landing';

const Home = () => {

    const [currentCategory, setCurrentCategory] = useState(undefined);
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className={style.big_box}>
               
                <Row className={style.container}>
                    <Col className={style.left_col} >
                        TEXT
                </Col>
                    <Col sm={true}>
                        {/* Center categories */}
                        <Categories showFunc={setShow} func={setCurrentCategory} />
                    </Col>
                    <Col className={style.right_col} >
                        <Facts />
                    </Col>
                </Row>
            </div>
            {currentCategory !== undefined
                ? 
                <CurrentCategory show={setCurrentCategory} showFunc={setShow} categorySelected={currentCategory} />
                :
               <Landing/>
            }
        </div>
    )
}

export default Home;