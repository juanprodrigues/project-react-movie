import React, { useContext } from "react";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import fondo from "./../../assets/fondo.png";
import "./misEstilos.css";

import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { Table } from "react-bootstrap";

const Carrito = () => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);
  const ctxCarrito = useContext(ContextoCarrito);

  let total = 0;
  for (let i = 0; i < ctxCarrito.appCarrito.length; i++) {
    total = total + ctxCarrito.appCarrito[i].popularity;
  }
  return (
    <div style={{ padding: "0 0 100% 0" }}>
      <div className="container">
        <h1 className="text-center">Carrito</h1>
        <h1 className="text-center">Total a pagar: ${total}</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="miTablaPersonalizada">
              <th></th>
              <th>Nombre</th>
              <th>Fecha de Estreno</th>
              <th>Precio</th>
              <th>Fecha de Estreno</th>
            </tr>
          </thead>
          <tbody>
            {ctxCarrito.appCarrito &&
              ctxCarrito.appCarrito.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + item.poster_path
                      }
                      alt={item.title}
                      style={{ width: "50%", height: "50%", minWidth: "150px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.release_date}</td>
                  <td>${item.popularity}</td>
                  <td>{item.release_date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Carrito;
