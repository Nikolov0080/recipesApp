import React from 'react'
import style from '../header.module.css';
import search_icon from '../search_icon.png';
import searchRecipe from '../../../../controllers/recipes/POST/searchRecipe/index';
const Search = () => {

    const handleSubmit = (e) => {
        console.log(1111111111)
        e.preventDefault();
    }

    const handleChange = (e) => {
        searchRecipe(e.target.value).then((resp)=>{
            console.log(resp);
        })
    }
    // TODO  find by name in db create functionality in API
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={style.search_container}>
                    <input placeholder="Search recipe..."
                        className={style.input_search}
                        onChange={handleChange} type="search"
                    />
                    <button className={style.search_btn}>
                        <img className={style.search_icon_style} src={search_icon} alt="search" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Search;