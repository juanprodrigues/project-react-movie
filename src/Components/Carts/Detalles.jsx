import React from "react";
import { useParams } from "react-router-dom";
import { mockTest } from "../../mock/mockTest";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./misEstilos.css";
const Detalles = (props) => {
  const { id } = useParams();
  // console.log(id);
  const onePet = mockTest.results.find((e) => e.id === Number(id));
  // const fondo =
  //   "url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
  //   onePet.poster_path +
  //   ")";
  // console.log(onePet);
  const styles = {
    header: {
      backgroundImage:
        "url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
        onePet.backdrop_path +
        ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",

      // linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
      //   width: '100%',
      //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
      // linear-gradient(rgb(3 10 16), rgb(0 12 147 / 55%))
      // background: "linear-gradient(rgb(3 10 16), rgb(0 12 147 / 55%))",
      // Color de texto
      color: "white",
    
    },
  };
  return (
    <div style={styles.header}>
      <div className="container">
        <br />
        <Row>
          <Col xs={6} md={3}>
            <img
              src={
                "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
                onePet.poster_path
              }
              alt={onePet.title}
            />
          </Col>
          <Col xs={12} md={9}>
            <div className="container">
              <Row>Nombre: {onePet.title}</Row>
              <Row>Fecha de estreno: {onePet.release_date}</Row>
              <Row>voto promedio: {onePet.vote_average}</Row>
              <Row>Visión general: {onePet.overview}</Row>
              <Row>Popularidad: {onePet.popularity}</Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Detalles;
