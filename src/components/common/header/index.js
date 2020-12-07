import React from 'react'
import NavBar from './navBar'
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
const Header = () => {

   
    return (
        <div>
            <ErrorBoundary message="something went wrong , please reload the page">
                <NavBar />
            </ErrorBoundary>
        </div>
    )
}

export default Header
