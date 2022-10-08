import React from 'react';
import Card from "../Carts/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Columnas = (props) => {

    // const listaDeF=parseJSON(dataprops.datos)
    var obj = props.datos
    console.log(obj)
    console.log("anme"+props.datos.poster_path)
// var listaDeF = JSON.stringify(obj)
//     console.log(( listaDeF))
//     const mostrar= props.datos.map((item) =>
//     console.log(( item))
    
    // );
    // const mostrar=listaDeF.map((item) =>
    // <Card key={item.id} dirImage={item.poster_path} titulo={item.title } />
    //    );
    return (
      
            <Card key={props.id} dirImage={   "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +props.datos.poster_path} titulo={props.datos.title } />
   
    );
};

export default Columnas;