import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { mockTest } from "../../mock/mockTest";
import { mockGeneros } from "../../mock/mockGeneros";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./misEstilos.css";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import VideoTrailer from "../../APIYoutobe/components/VideoTrailer";
import dirSuma from "./../../assets/suma.png";

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
  const enviarFondo =
    "https://image.tmdb.org/t/p/w500/" + peliculaObjeto.backdrop_path;
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
          <Col xs={6} md={6}>
            <VideoTrailer
              nombreYoutobe={peliculaObjeto.title + "| Official Trailer"}
            ></VideoTrailer>
          </Col>
          <Col style={{ paddingLeft: "0vw" }} xs={10} md={6}>
            <div className="container" style={{ color: "#8da0bc" }}>
              <Row>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    peliculaObjeto.poster_path
                  }
                  alt={peliculaObjeto.title}
                  style={{ width: "20%", height: "20%", minWidth: "150px" }}
                />
              </Row>
              <Row>
                <Col md={4}>
                  <h1 style={{ color: "white" }}> {peliculaObjeto.title}</h1>
                </Col>
                <Col md={3}>
                  <img
                    src={dirSuma}
                    alt={peliculaObjeto.title}
                    style={{ width: "80px", height: "80px" }}
                  />
                </Col>
              </Row>
              <Row>
                Genero:
                {newStr}
              </Row>
              <Row>Fecha de estreno: {peliculaObjeto.release_date}</Row>
              <Row>Sinopsis: {peliculaObjeto.overview}</Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Detalles;
