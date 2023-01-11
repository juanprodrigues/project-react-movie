import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Peliculas from "../Components/Header/Peliculas";
const API_URL_SEARCH_NAME_START =
  "https://api.themoviedb.org/3/search/movie?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US&query=";
const API_URL_SEARCH_NAME_END = "&page=1&include_adult=false";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  //función de búsqueda
  const searcher = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL_SEARCH_NAME_START + search + API_URL_SEARCH_NAME_END)
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data.results.length);
        console.log(search);

        console.log(data.results);

        setMovies(data.results);
      })
      .catch((e) => console.log("af", e));
  }, [search]);
  //renderizamos la vista
  return (
    <>
        <div className="container">
          <input
            style={{ width: "96%" }}
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search"
            className="form-control"
          />
     
      </div>
      <Peliculas contenido={movies} title={search} genero={false} />
    </>
  );
};
export default SearchComponent;
