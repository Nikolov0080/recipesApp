import React from 'react'
import style from './footer.module.css';

const Footer = () => {
    return (
        <div data-testid="footer" className="page-footer" >
            <hr />
            <h1 className={style.footer_text}>footer</h1>
        </div>
    )
}

export default Footer;