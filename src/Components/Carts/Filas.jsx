import React from "react";
import Columnas from "../Carts/Columnas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Filas = (props) => {
  const listaDeF = props.datos;

  const mostrar = listaDeF.map((item) => (
    <Col>
      <Columnas key={item.id} datos={item} />{" "}
    </Col>
  ));
  return <Row>{mostrar}</Row>;
};

export default Filas;
