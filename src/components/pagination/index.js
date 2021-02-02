import React from 'react'
import PagesButtons from './pagesButtons/index';

const Pagination = (props) => {
    return (
        <div>
            {props.children}
            {/* this is not completed */}
            <PagesButtons buttonsCount={7}/>
        </div>
    )
}

export default Pagination;