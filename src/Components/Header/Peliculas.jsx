import React, { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Carts/Cards";
import Filas from "../Carts/Filas";
import { mockTest } from "../../mock/mockTest";
import Nosotros from "./Nosotros";
const Peliculas = () => {
  // prosesar el mock
  //   https://image.tmdb.org/t/p/w185_and_h278_bestv2/7VuQopunJnHKI1xejbdRUyDbP0S.jpg
  //   console.log(mockTest.results[0].original_title);
  //   console.log(mockTest.results[0].poster_path);


// se puede usar el siguiente endpoint-->
// https://api.themoviedb.org/3/movie/popular?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US&page=1

  const titulo = mockTest.results[0].original_title;
  const dirImage =
    "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
    mockTest.results[0].poster_path;
  const listamia = mockTest.results;

  function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      // Haz algo si quieres con el grupo
      tempArray.push(myChunk);
    }

    return tempArray;
  }
  // Dividir en grupo de 4 artículos
  var result = chunkArray(listamia, 3);
  // Imprime: [ [1,2,3] , [4,5,6] ,[7,8] ]
  const mostrar = result.map((item) => <Filas key={item.id} datos={item} />);
// const mostrar1 = result.map((item) =>  console.log(item) );
//  console.log(result)
  return (
    <div>
      <div>
        {/* la suma de los md tiene que ser 12 
        titulo={titulo} dirImage={}
        */}
        <Row>
          <Col xs={12} md={9} className="col-auto text-center">
            Enviar las cartas
            {/* <Row className="container"> */}
              <Row className="container" Style="margin-left: 12%; ">
              {mostrar}
            </Row>
          </Col>

          <Col xs={6} md={3}>
            {/* comp aux */}
            <Col className="col-auto text-center">Mas Peliculas</Col>
            <Col className="col-auto text-center">Peluculas Destacadas</Col>
            <Col className="col-auto text-center">Top Estrenos</Col>
          </Col>
        </Row>
      </div>

      <Container>
        {/* <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row> */}
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>

        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>

        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm>Derecha 1</Col>
          <Col sm>Derecha 1</Col>
          <Col sm>Derecha 1</Col>
          <Col sm>Derecha 1</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm>Derecha 2</Col>
          <Col sm>Derecha 2</Col>
          <Col sm>Derecha 2</Col>
          <Col sm>Derecha 2</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm>Derecha 3</Col>
          <Col sm>Derecha 3</Col>
          <Col sm>Derecha 3</Col>
          <Col sm>Derecha 3</Col>
        </Row>
      </Container>

      {/* Mostrar cart de peliculas tipo grilla
             4 columnas y 6 filas
             y 3 componentes a los constados
             mas pelucilas
             Peli destcadas
             mas pelis 
             
             para una tables los comp se van a bajo y cambia a 3 columnas por X

             
             */}
    </div>
  );
};

export default Peliculas;
