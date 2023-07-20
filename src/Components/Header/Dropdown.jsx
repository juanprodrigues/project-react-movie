import { NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";

import "./misEstilos.css";
export const Dropdown = (props) => {
  return (
    <>
      

      <NavDropdown title={props.title} id="basic-nav-dropdown">
        {props.items.genres.map((item) => (
          <Link to={`/genero/${item.id}`} style={{ textDecoration: 'none' ,color: "black"}}>
          <NavDropdown.Item key={item.id} href={`/genero/${item.id}`}>
            {item.name}
          </NavDropdown.Item>
          </Link>
        ))}
      </NavDropdown>

    </>
  );
};
