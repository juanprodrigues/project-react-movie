import imagen from "./../../assets/logo.png";
import { Button, Form, Nav, Navbar } from "react-bootstrap/";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import "./misEstilos.css";
import { useContext, useEffect, useState } from "react";
import { mockGeneros } from "../../mock/mockGeneros";
import Peliculas from "./Peliculas";
import Busqueda from "./Busqueda";
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";

export const NavBar = ({ items }) => {
  // https://api.themoviedb.org/3/discover/movie?api_key=e89c54fdd607bf1bf15474118f3abb7b&with_genres=53
  //   const [state, setState] = useState("")

  //   const [state1, setState1] = useState("")

  //   useEffect(() => {
  //     console.log('useEffect []');
  //     const tareas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US';
  //     fetch(tareas)
  //         .then(response => response.json())
  //         .then(myJson => {

  //            setState(Object.values(myJson)[0] );
  //            console.log("tst",state);
  //           //  setState1(name(state))

  //            let aux = [];
  //            for (let i = 0; i < 19; i++) {
  //              let auxInt = [];
  //             //  console.log(state[i].id);
  //              auxInt.push(state[i][1]);
  //              auxInt.push(state[i][0]);
  //              aux.push(auxInt);
  //            }
  //            console.log("tst-->",aux);
  //         })
  //         .catch(error => console.log(error));
  //     return () => {
  //         console.log('cleanup useEffect []')
  //     }
  // }, [])

  // function name(state) {

  //   let aux = [];
  //   for (let i = 0; i < 19; i++) {
  //     let auxInt = [];
  //     console.log(state[i].id);
  //     // auxInt.push(items[i].name);
  //     // auxInt.push(items[i].id);
  //     // aux.push(auxInt);
  //   }

  //   return aux;
  // }

  // function obtenerGeneros() {

  //  };
  // obtenerGeneros();
  //  console.log("json:",state);
  const listamia = mockGeneros;
  const [nombreBuscar, setNombreBuscar] = useState("");
  const [busqueda, setbusqueda] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.", e.target[0].value);
    setbusqueda(e.target[0].value);
  }
  const handleChange = (e) => {
    setbusqueda(e.target.value);
    console.log(e.target.value);
  };
  let redir = () => {
    window.location.href = window.location.origin + `/search/:${busqueda}`;
  };

  const ctxCarrito = useContext(ContextoCarrito);
  useEffect(() => {
    console.log("candida a mostrar en navbar", ctxCarrito.appCarrito.length);
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
            // items={["Accion", "Comedia", "Aventura", "Terror", "Drama"]}
          />

          <Form
            onSubmit={(e) => e.preventDefault() || redir()}
            className="d-flex"
          >
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setbusqueda(e.target.value)}
            />
          </Form>
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
