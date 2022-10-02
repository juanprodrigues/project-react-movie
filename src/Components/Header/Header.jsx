import {Container,Navbar} from 'react-bootstrap/';
import { NavBar } from './NavBar';



export const Header = () =>{

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <NavBar
                    items={['Inicio', 'Peliculas']}
                />
            </Container>
        </Navbar>
    );
    
}