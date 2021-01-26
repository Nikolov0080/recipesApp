import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SessionContext from '../context/sessionContext';
import Layout from '../components/common/layout/index';

import HomePage from '../pages/home';
import LoginPage from '../pages/user/login';
import RegisterPage from '../pages/user/register';
import UserProfile from '../pages/user/profile';
import CreateRecipe from '../pages/recipes/createRecipe/index';
import SearchResults from '../pages/recipes/searchResults';
import RecipeDetails from '../components/recipes/recipeDetails';
import LikedRecipes from '../pages/user/likedRecipes/index';
import CreatedRecipes from '../pages/user/createdRecipes/index';

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
                            <Route exact path="/recipe-details/:id" component={RecipeDetails} />
                            <Route exact path="/search-results/:query" component={SearchResults} />
                            <Route exact path="/liked-recipes/:id" component={LikedRecipes} />
                            <Route exact path="/created-recipes/:id" component={CreatedRecipes} />
                      
                        </Switch>
                    </Layout>
                </SessionContext>
            </Router>
        </div>
    )
}

export default PageRouter;