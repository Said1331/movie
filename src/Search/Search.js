import React from 'react';
import './Search.css'

const Search = ({setSearch,setMovie,movieSearch,search}) => {
    const searchInput = (e)=>{
        setSearch(e.target.value)
    }
    const clickBtn = (e)=>{
        movieSearch(e.target.value)
    }
    return (
        <div className='search'>
            <div className="container">
                <div className="search-box">
                    <input value={search} placeholder='Поиск' type="text" className="sea-inp" onChange={searchInput}/>
                    <button value={search} className="sea-btn" type='button' onClick={clickBtn} >Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Search;