import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Home } from './Components/Main/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nosotros from "./Components/Header/Nosotros";
import Contacto from "./Components/Header/Contacto";
import Inicio from "./Components/Header/Inicio";
import Peliculas from './Components/Header/Peliculas';
function App() {

  const breakpoints=[]

  return (
      <>
      <Router>
        <Header />
        <Routes>
        <Route
            path="/peliculas"
            caseSensitive={false}
            element={<Peliculas />}
          />
          <Route
            path="/nosotros"
            caseSensitive={false}
            element={<Nosotros />}
          />
          <Route
            path="/contacto"
            caseSensitive={false}
            element={<Contacto />}
          />
          <Route path="/" caseSensitive={false} element={<Inicio />} />
        </Routes>
        </Router>

{/* carusel */}
        {/* <Container fluid className="px-0">
          <ThemeProvider
            breakpoints={{ breakpoints }}
            minBreakpoint="xxs"
          >
            <Home />
          </ThemeProvider>
        </Container> */}
        
      </>
  );
}

export default App;
