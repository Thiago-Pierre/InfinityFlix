import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import "./moviesgrid.css";
import { useSearchParams } from "react-router-dom";



const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


const Search = () => {
  const [searchParams] = useSearchParams();
  
  const filme = searchParams.get("filme");
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const url = `${searchUrl}?${apiKey}&query=${filme}`;
    getMovies(url);
  }, [filme]);
    
  return (
    <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{filme}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
  )
}

export default Search