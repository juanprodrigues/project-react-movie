import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Peliculas from "../Components/Header/Peliculas";
const API_URL_SEARCH_NAME_START =
  "https://api.themoviedb.org/3/search/movie?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US&query=";
const API_URL_SEARCH_NAME_END = "&page=1&include_adult=false";

const Test = () => {
  const { name } = useParams();
  // console.log(id)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL_SEARCH_NAME_START + name + API_URL_SEARCH_NAME_END)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results.length > 0);
        setMovies(data.results);
      });
  }, name);
  return (
    <div>
      {/* {movies.results ? <h3>Esto es una busqueda por nombre: {name}</h3> : ""}

      {movies.results ? (
        <Peliculas contenido={movies} title={name} genero={false} />
      ) : (
        <h1>No se encuentra contenido con este nombre: {name}</h1>
      )} */}

      <h3>Esto es una busqueda por nombre{name}</h3>

      <Peliculas contenido={movies} title={name} genero={false} />
    </div>
  );
};

export default Test;
