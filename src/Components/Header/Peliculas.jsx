import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import fondo from "./../../assets/fondo.png";
import Filas from "../Carts/Filas";
import { mockTest } from "../../mock/mockTest";

const Peliculas = () => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);
  // prosesar el mock
  //   https://image.tmdb.org/t/p/w500/7VuQopunJnHKI1xejbdRUyDbP0S.jpg
  //   console.log(mockTest.results[0].original_title);
  //   console.log(mockTest.results[0].poster_path);
  // https://image.tmdb.org/t/p/w500/
  // se puede usar el siguiente endpoint-->
  // https://api.themoviedb.org/3/movie/popular?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US&page=1

  // const titulo = mockTest.results[0].original_title;
  // const dirImage =
  //   "https://image.tmdb.org/t/p/w500/" + mockTest.results[0].poster_path;

  const listamia = mockTest.results;

  function dividirEnListaChicas(listaPeliculas, cantSeparar) {
    var i = 0;
    var tamLista = listaPeliculas.length;
    var listaAux = [];

    for (i = 0; i < tamLista; i += cantSeparar) {
      var peliculaInsertar = listaPeliculas.slice(i, i + cantSeparar);
      listaAux.push(peliculaInsertar);
    }

    return listaAux;
  }
  // Dividir en grupo de 4 artículos
  
  var result = dividirEnListaChicas(listamia, 4);

  const mostrar = result.map((item) => <Filas key={item.id} datos={item} />);

  return (
    <div>
      <br />
      <div>
        {/* la suma de los md tiene que ser 12 */}
        <Row>
          <Col xs={12} md={9} className="col-auto text-center">
            <Row className="container">
              {/* <Row className="container" Style="margin-left: 12%; "> */}
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
