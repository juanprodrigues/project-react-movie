import imagen from "./../../assets/logo.png";

import {Nav, Navbar } from "react-bootstrap/";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import "./misEstilos.css";
import { useContext, useEffect, useState } from "react";
import { mockGeneros } from "../../mock/mockGeneros";

import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ items }) => {
  const listamia = mockGeneros;
  const [nombreBuscar, setNombreBuscar] = useState("");
  const [busqueda, setbusqueda] = useState("");
  const { cartCount } = useContext(ContextoCarrito)
  function handleSubmit(e) {
    e.preventDefault();
    setbusqueda(e.target[0].value);
  }
  const handleChange = (e) => {
    setbusqueda(e.target.value);
  };
  let redir = () => {
    window.location.href = window.location.origin + `/search/:${busqueda}`;
  };

  const ctxCarrito = useContext(ContextoCarrito);
  useEffect(() => {
  }, [ctxCarrito.setappCarrito]);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`search/:${searchQuery}`);
  }

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
