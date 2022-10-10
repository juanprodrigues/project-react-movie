import imagen from "./../../assets/logo.png";
import { Form, Nav, Navbar } from "react-bootstrap/";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";
import "./misEstilos.css";

export const NavBar = ({ items }) => {
  return (
    <>
      <Navbar.Brand as={Link} to="/" >
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
          {/* {items.map((item) => (
            <Nav.Link key={item} href={`#${item}`}>
              {item}
            </Nav.Link>

         



          ))} */}
          <Nav.Link as={Link} to="/"  >
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/peliculas"  >
            Peliculas
          </Nav.Link>
          <Dropdown
            title="Generos"
            items={["Accion", "Comedia", "Aventura", "Terror", "Drama"]}
             />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Nav.Link as={Link} to="/carrito"  >
            Carrito
          </Nav.Link>

          <Nav.Link as={Link} to="/ingresar"  >
            Ingresar
          </Nav.Link>

          <Nav.Link as={Link} to="/registrate"  >
            Registrate
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
