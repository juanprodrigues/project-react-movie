import { Container, Navbar } from "react-bootstrap/";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    // <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar expand="lg" style={{ backgroundColor: "rgb(8 15 40 / 68%)" }}>
      <Container>
        <NavBar
        // items={'Inicio'}
        />
      </Container>
    </Navbar>
  );
};
