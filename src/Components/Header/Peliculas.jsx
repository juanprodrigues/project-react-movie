import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import fondo from "./../../assets/fondo.png";
import Filas from "../Carts/Filas";
import { mockTest } from "../../mock/mockTest";

const Peliculas = (props) => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);
  // prosesar el mock
  //   https://image.tmdb.org/t/p/w500/7VuQopunJnHKI1xejbdRUyDbP0S.jpg
  //   console.log(mockTest.results[0].original_title);
  //   console.log(mockTest.results[0].poster_path);
  // https://image.tmdb.org/t/p/w500/
  // se puede usar el siguiente endpoint-->
  // https://api.themoviedb.org/3/movie/popular?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US&page=1
  //api_key=e89c54fdd607bf1bf15474118f3abb7b
  // const titulo = mockTest.results[0].original_title;
  // const dirImage =
  //   "https://image.tmdb.org/t/p/w500/" + mockTest.results[0].poster_path;
  let listamia=""
  if (Object.entries(props).length !== 0) {
    listamia = props.contenido;
    // console.log("api");
  } else {
    listamia = mockTest.results;
    // console.log("mock");
  }

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
      {props.genero?  <h1 className="text-center">Genero: {props.title}</h1>:""}
    
      <div>
        {/* la suma de los md tiene que ser 12 */}
        <Row>
          <Col xs={12} md={9} className="col-auto text-center">
            <Row className="container">
              {/* <Row className="container" Style="margin-left: 12%; "> */}
              {mostrar}
            </Row>
          </Col>

          {/* <Col xs={6} md={3}>
            <Col className="col-auto text-center">Mas Peliculas</Col>
            <Col className="col-auto text-center">Peluculas Destacadas</Col>
            <Col className="col-auto text-center">Top Estrenos</Col>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default Peliculas;
