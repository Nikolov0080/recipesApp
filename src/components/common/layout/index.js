import React, { Component } from 'react'
import Header from '../header/index';
import Footer from '../footer/index';
import style from './layout.module.css';

class Layout extends Component {

    render() {
        return (
            <div className={style.main_container} >
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}

export default Layout;