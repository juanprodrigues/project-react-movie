import imagen from "./../../assets/logo.png";

import {Nav, Navbar } from "react-bootstrap/";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import "./misEstilos.css";
import { useContext, useEffect } from "react";
import { mockGeneros } from "../../mock/mockGeneros";

import { ContextoCarrito } from "../../Contexto/ContextoCarrito";

export const NavBar = ({ items }) => {
  const listamia = mockGeneros;
  const ctxCarrito = useContext(ContextoCarrito);
  useEffect(() => {
  }, [ctxCarrito.setappCarrito]);


  return (
    <>
      <Navbar.Brand as={Link} to="/">
        <img
          src={imagen}
          height="45px"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span className="align-middle p-3">Cuevana 4</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/peliculas">
            Peliculas
          </Nav.Link>
          <Dropdown
            title="Generos"
            items={listamia}
          />


          <Nav.Link as={Link} to="/search" >
           <div >
              Busqueda
                
           </div> 
          </Nav.Link>
          <Nav.Link as={Link} to="/carrito">
            Carrito({ctxCarrito.appCarrito.length})
          </Nav.Link>
   
          <Nav.Link as={Link} to="/ingresar">
            Ingresar
          </Nav.Link>

          <Nav.Link as={Link} to="/registrate">
            Registrate
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
