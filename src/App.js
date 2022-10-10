import React from "react";
import { Header } from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./Components/Main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ingresar from "./Components/Header/Ingresar";
import Carrito from "./Components/Header/Carrito";
import Registrate from "./Components/Header/Registrate";
import Peliculas from "./Components/Header/Peliculas";
import Error from "./Components/Utils/Error";
import Detalles from "./Components/Carts/Detalles";

function App() {
 
  
  // const numeroPadre ="https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg";

  const styles = {
    header: {
      //  backgroundImage: "url(" + numeroPadre + ")",
      backgroundColor:"#141a32",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      //   width: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      color: "white"   
    
    },
  };

  return (
    <div style={styles.header}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/peliculas"
            caseSensitive={false}
            element={<Peliculas />}
          />
          <Route
            path="/ingresar"
            caseSensitive={false}
            element={<Ingresar />}
          />
          <Route path="/carrito" caseSensitive={false} element={<Carrito />} />
          <Route
            path="/registrate"
            caseSensitive={false}
            element={<Registrate />}
          />

          <Route
            path="/"
            // caseSensitive={false}
            element={<Home />}
          />
          <Route path="detalles/:id" element={<Detalles />}></Route>
          {/* en elcaso que no se encuentre redireciona a un 404 */}
          <Route
            path="*"
            // caseSensitive={false}
            element={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
