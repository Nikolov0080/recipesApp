import React from 'react'
import style from './header.module.css';
import search_icon from './search_icon.png';

const Search = () => {

    const handleSubmit = () => {
        console.log(1111111111)
    }

    const handleChange = () => {
        console.log('fdsfsdfd')
    }
    // TODO  find by name in db create functionality in API
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.search_container}>
                    <input placeholder="Search recipe..." className={style.input_search} onChange={handleChange} type="search" />
                <button className={style.search_btn}>
                   <img className={style.search_icon_style} src={search_icon} alt="search" />
                </button>
                </div>
                
            </form>
        </div>
    )
}

export default Search;