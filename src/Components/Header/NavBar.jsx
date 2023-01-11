import imagen from "./../../assets/logo.png";
import iconLupa from "./../../assets/lupa.png";
import { Button, Form, Nav, Navbar } from "react-bootstrap/";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import "./misEstilos.css";
import { useContext, useEffect, useState } from "react";
import { mockGeneros } from "../../mock/mockGeneros";
import Peliculas from "./Peliculas";
import Busqueda from "./Busqueda";
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { useNavigate } from "react-router-dom";

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
  const { cartCount } = useContext(ContextoCarrito)
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
            // items={["Accion", "Comedia", "Aventura", "Terror", "Drama"]}
          />

          {/* <Form
            onSubmit={handleSubmit}
            className="d-flex"
            action={'search/:'+busqueda}
          >
            <Form.Control
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              type="text"
              value={busqueda}
              // onChange={(event) => setSearchQuery(event.target.value)}
              onChange={handleChange}
            />
          </Form> */}

          <Nav.Link as={Link} to="/search" >
           <div >
               {/* <img
                style={{ width: "10%", height: "100%" }}
                src={iconLupa}
                alt=""
              /> */}
              {/* <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"/> */}
              {/* <img className="imgIconSearch" style={{ width: "20%", height: "100%" }} src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"/> */}
              Busqueda
                
           </div> 
          </Nav.Link>
          <Nav.Link as={Link} to="/carrito">
            Carrito({ctxCarrito.appCarrito.length})
          </Nav.Link>
        {/* <Link
                            to='/carrito'
                            // className="btn btn-light rounded-pill fs-6 fw-bold me-3"
                        >
                            {/* { cartCount } */}
                        {/* </Link>  */} 
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
