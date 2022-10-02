import imagen from './../../assets/logo.png'
import {Form, Nav,Navbar} from 'react-bootstrap/';
import { Dropdown } from './Dropdown';

export const NavBar = () =>{

    return (
        <>
            <Navbar.Brand href="#home">
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
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#Peliculas">Peliculas</Nav.Link>
                    <Dropdown
                        title="Generos"
                        items={[
                            "Accion",
                            "Comedia",
                            "Aventura",
                            "Terror",
                            "Drama",
                        ]}
                    />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav.Link href="#Carrito">Carrito</Nav.Link>
                    <Nav.Link href="#Ingresar">Ingresar</Nav.Link>
                    <Nav.Link href="#Registrate">Registrate</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </>
    );

}