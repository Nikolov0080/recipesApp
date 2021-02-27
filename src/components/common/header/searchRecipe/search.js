import React, { useState } from 'react'
import style from '../header.module.css';
import search_icon from '../search_icon.png';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <form>
                <div className={style.search_container}>
                    <input placeholder="Search recipe..."
                        className={style.input_search}
                        onChange={handleChange} type="text"
                    />

                    {query !== ''
                        ?
                        <BrowserRouter>
                            <LinkContainer as="button" to={"/search-results/query=?" + query}>
                                <button className={style.search_btn}>
                                    <img className={style.search_icon_style} src={search_icon} alt="search" />
                                </button>
                            </LinkContainer>
                        </BrowserRouter>

                        :
                        <img className={style.search_icon_style} src={search_icon} alt="search" />
                    }

                </div>
            </form>
        </div>
    )
}

export default Search;