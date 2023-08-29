import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs';
import MovieCard from "../components/MovieCard";
import "./Movie.css";

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState ([null]);
      const getMovie = async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          setMovie(data);
    };

  useEffect(() => {
      const url = `${movieUrl}${id}?${apiKey}`;
      getMovie(url);
  }, []);

  return (
      <div className="movie-page">
        {movie &&(
          <>
              <MovieCard movie={movie} showLink={false} />
              <p className="tagline">{movie.tagline}</p>
              <div className="info">
                <h3>
                  <BsWallet2/> Orçamento:
                </h3>
                <p>{movie.budget}</p>
              <div>
                <h3>
                  <BsGraphUp /> Receita:
                </h3>
                <p>{movie.revenue}</p>
              </div>

              </div>
          </>
        )};
    </div>
  );
};

export default Movie