import React from 'react'
import HeaderLinks from './links'

const Header = (props) => {
    return (
        <div>
         
                <HeaderLinks />
          
            {props.children}
        </div>
    )
}

export default Header
