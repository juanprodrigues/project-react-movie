import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Peliculas from "./Peliculas";
const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=e89c54fdd607bf1bf15474118f3abb7b&with_genres=";
const Generos = (props) => {
  const { id } = useParams();
  // console.log(id)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL + id)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, id);

  const [nameMovies, setnameMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof id);
        console.log(data.genres);
        for (let index = 0; index < data.genres.length; index++) {
          console.log(typeof data.genres[index].id);
          if (data.genres[index].id === Number(id)) {
            console.log(data.genres[index].name);
            setnameMovies(data.genres[index].name);
          }
        }
      });
  }, id);
  //   console.log(movies)
  return (
    <>
      <Peliculas contenido={movies} title={nameMovies} genero={true}  />
    </>
  );
};

export default Generos;
