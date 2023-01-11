import React, { useEffect } from "react";
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

  let listamia = "";

  if (props.contenido !== undefined) {
    listamia = props.contenido;
  } else {
    listamia = mockTest.results;
  }
  useEffect(() => {
    listamia = props.contenido;
  }, [props.contenido]);

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
  if (props.contenido!==undefined) {
    if (props.contenido.length === 0) {
      return (
        <div style={{ padding: "0 0 100% 0" }} className="container text-center">


<br />
<br />

 <br />
 <br />
 
          No se encuentras peliculas con este nombre
        </div>
      );
    }
  }
  return (
    <div>
      <br />
      {props.genero ? (
        <h1 className="text-center">Genero: {props.title}</h1>
      ) : (
        ""
      )}

      <div className="container">
        {/* la suma de los md tiene que ser 12 */}
        <Row>
          <Col xs={12} md={12} className="col-auto text-center">
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
