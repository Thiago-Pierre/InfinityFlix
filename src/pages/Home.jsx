import { useState, useEffect } from "react"
import "./moviesgrid.css"
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [movies, setMovies] = useState ([]);
    const getMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        const url = `${moviesURL}top_rated?${apiKey}`;
        getMovies(url);
    }, []);
    
   
    return (
        <div className="container">
            <h2 className="title">
                Melhores filmes:
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    );
};
export default Home;