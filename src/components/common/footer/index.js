import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ConnectsDev from './connectsDev';
import Linkedin from './linkedin';
import style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer1}>
            <div data-testid="footer" className="page-footer" >
            <Row className="text-center">
                <Col >
                    <h5 className={style.connect} >Connect the developer</h5>
                    <Row>
                        <Col className="float-left">
                            <ConnectsDev />
                        </Col>
                        <Col>
                            <Linkedin />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br/>
        </div>
        </div>
        
    )
}

export default Footer;