import React, { Component } from 'react';
import UserContext from '../../context/userContext'

class MyRecipes extends Component {

    static contextType = UserContext;

    render() {
        console.log(this.context)
        return (
            <div>
                <h1>My Recipes here</h1>
                
            </div>
        )
    }
}

export default MyRecipes;