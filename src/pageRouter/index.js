import React from 'react'
import HomePage from '../pages/home';
import LoginPage from '../pages/user/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const PageRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default PageRouter
