import React from 'react';
import Card from "../Carts/Cards";

const Columnas = (props) => {

    return (
      
            <Card key={props.id} id={props.datos.id} dirImage={   "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +props.datos.poster_path} titulo={props.datos.title } />
   
    );
};

export default Columnas;