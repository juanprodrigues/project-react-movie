import { NavDropdown } from "react-bootstrap/";
import "./misEstilos.css";
export const Dropdown = ({ title, items }) => {
  return (
    <>
      <NavDropdown title={title} id="basic-nav-dropdown">
        {items.map((item) => (
          <NavDropdown.Item key={item} href="#">
            {item}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
};
