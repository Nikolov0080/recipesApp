import React, { useState } from 'react'
import style from '../header.module.css';
import search_icon from '../search_icon.png';
import searchRecipe from '../../../../controllers/recipes/POST/searchRecipe/index';

const Search = () => {
    const [query, setQuery] = useState('');
    const [found, setFound] = useState([]);

    async function search() {
        return await searchRecipe(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        search().then((resp) => {

            console.log(resp)
            setFound(resp);
        }).then(() => {

        })
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleClick = (e) => {
        if (query !== '') {

        }
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={style.search_container}>
                    <input placeholder="Search recipe..."
                        className={style.input_search}
                        onChange={handleChange} type="text"
                    />
                    <button onClick={handleClick} className={style.search_btn}>
                        <img className={style.search_icon_style} src={search_icon} alt="search" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Search;