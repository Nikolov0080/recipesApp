import React from 'react'
import HomePage from '../pages/home';
import LoginPage from '../pages/user/login';
import RegisterPage from '../pages/user/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SessionContext from '../context/sessionContext';

const PageRouter = () => {
    return (
        <div>
            <Router>
                <Header>
                    <Switch>
                        <SessionContext>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegisterPage} />
                        </SessionContext>
                    </Switch>
                </Header>
                <Footer />
            </Router>
        </div>
    )
}

export default PageRouter;