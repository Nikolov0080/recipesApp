import React, { Component } from 'react'
import Header from '../header/index';
import Footer from '../footer/index';

class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}

export default Layout;