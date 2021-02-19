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
                    <h6 className="text-center" >Connect the developer</h6>
                    <Row>
                        <Col className="float-left">
                            <ConnectsDev />
                        </Col>
                        <Col>
                            <Linkedin />
                        </Col>
                    </Row>

                </Col>
                <Col>
                    col 2
                </Col>
            </Row>
            <br/>
        </div>
        </div>
        
    )
}

export default Footer;