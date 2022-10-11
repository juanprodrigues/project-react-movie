import React, { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { mockTest } from "../../mock/mockTest";
import { mockGeneros } from "../../mock/mockGeneros";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./misEstilos.css";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
const Detalles = (props) => {
  //se usa para indentificar la pelicula, se puede encontrar en el router
  const { id } = useParams();

  const peliculaObjeto = mockTest.results.find((e) => e.id === Number(id));
  const ObjGenerosd = [];
  for (let i = 0; i < peliculaObjeto.genre_ids.length; i++) {
    const generos = mockGeneros.genres.find(
      (e) => e.id === Number(peliculaObjeto.genre_ids[i])
    );
    ObjGenerosd.push(generos.name);
  }
  // -------------------------------------------------------Context------------------------------------------
  const ctx = useContext(ContextoBackground);
  const enviarFondo = "https://image.tmdb.org/t/p/w500/" + peliculaObjeto.backdrop_path;
  ctx.setappTheme(enviarFondo);
  // -------------------------------------------------------Context------------------------------------------
  const styles = {
    header: {
      backgroundColor: "rgb(8 15 40 / 68%)",
      padding: "0 0 15% 0",
      // Color de texto
      color: "white",
    },
  };

  //construir cadena de generos...
  let cadenaSting = "";
  for (let index = 0; index < ObjGenerosd.length; index++) {
    if (ObjGenerosd[index]) {
      cadenaSting = cadenaSting + ObjGenerosd[index] + ",";
    } else {
      cadenaSting = cadenaSting + ".";
    }
  }
  const newStr = cadenaSting.slice(0, -1) + ".";

  return (
    <div style={styles.header}>
      <div className="container">
        <br />
        <Row>
          <Col xs={6} md={3}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + peliculaObjeto.poster_path}
              alt={peliculaObjeto.title}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col xs={12} md={9}>
            <div className="container" style={{ color: "#8da0bc" }}>
              <Row>
                <h1 style={{ color: "white" }}> {peliculaObjeto.title}</h1>
              </Row>
              <Row>
                <h6>{peliculaObjeto.original_title}</h6>
              </Row>
              <Row>
                Genero:
                {/* <p style={{ color: "white" }}>  */}
                {newStr}
                {/* {/* </p> */}
              </Row>
              <Row>Fecha de estreno: {peliculaObjeto.release_date}</Row>
              <Row>voto promedio: {peliculaObjeto.vote_average}</Row>
              <Row>Visión general: {peliculaObjeto.overview}</Row>
              <Row>Popularidad: {peliculaObjeto.popularity}</Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Detalles;
