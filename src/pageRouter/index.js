import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SessionContext from '../context/sessionContext';
import Layout from '../components/common/layout/index';

import HomePage from '../pages/home';
import LoginPage from '../pages/user/login';
import RegisterPage from '../pages/user/register';
import UserProfile from '../pages/user/profile';
import CreateRecipe from '../pages/recipes/createRecipe/index';

const PageRouter = () => {
    return (
        <div>
            <Router>
                <SessionContext>
                    <Layout>
                        <Switch>

                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegisterPage} />
                            <Route exact path="/profile" component={UserProfile} />
                            <Route exact path="/create-recipe" component={CreateRecipe} />

                        </Switch>
                    </Layout>
                </SessionContext>
            </Router>
        </div>
    )
}

export default PageRouter;