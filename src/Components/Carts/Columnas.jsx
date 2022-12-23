import React from "react";
import Card from "../Carts/Cards";

const Columnas = (props) => {
  return (
    <Card
      key={props.id}
      id={props.datos.id}
      dirImage={"https://image.tmdb.org/t/p/w500/" + props.datos.poster_path}
      titulo={props.datos.title}
    />
  );
};

export default Columnas;
