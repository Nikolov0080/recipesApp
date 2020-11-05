import React from 'react'
import HomePage from '../pages/home';
import LoginPage from '../pages/user/login';
import RegisterPage from '../pages/user/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SessionContext from '../context/sessionContext';
import Layout from '../components/common/layout/index';

const PageRouter = () => {
    return (
        <div>
            <Router>
                <Layout>
                    <Switch>
                        <SessionContext>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegisterPage} />
                        </SessionContext>
                    </Switch>
                </Layout>
            </Router>
        </div>
    )
}

export default PageRouter;