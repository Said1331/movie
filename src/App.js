import './App.css';
import React, {useEffect, useState} from "react";
import Head from "./Head/Head";
import axios from "axios";
import Section from "./Home/Section";
import Search from "./Search/Search";

function App() {

    const [movie,setMovie] = useState([]);

    const [search,setSearch] = useState('')

    // useEffect(()=>{
    //     axios(`https://www.omdbapi.com/?apikey=d08aaa0&s=matrix`)
    //         .then(({data})=>setMovie(data.Search))
    // },[])
    const movieSearch = (str)=>{
        axios(`https://www.omdbapi.com/?apikey=d08aaa0&s=${search}`)
            .then(({data})=>setMovie((data.Search)))

    }

  return (
    <div className="App">
        <Head/>
        <Search movieSearch={movieSearch} search={search} setSearch={setSearch} setMovie={setMovie}/>
        <Section movie={movie} setMovie={setMovie}/>
    </div>
  );
}

export default App;
